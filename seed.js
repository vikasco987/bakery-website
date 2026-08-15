const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function main() {
  console.log("Reading Zomato JSON...");
  const rawData = fs.readFileSync('/Users/vikas/.gemini/antigravity-ide/scratch/zomato-scraper/zomato_pretty.json', 'utf8');
  const data = JSON.parse(rawData);

  console.log("Extracting items...");
  const items = [];
  const categories = new Set();
  
  // Recursively find items in the weird zomato JSON structure
  function extractItems(obj, currentCategory = 'Popular') {
    if (!obj || typeof obj !== 'object') return;
    
    // If it looks like a category
    if (obj.category && obj.category.name) {
      currentCategory = obj.category.name;
      if (currentCategory.trim() !== '') {
        categories.add(currentCategory);
      }
    }
    
    // If it looks like an item
    if (obj.item && obj.item.name) {
      if (obj.item.item_image_url && obj.item.item_image_url.startsWith('http')) {
        items.push({
          name: obj.item.name,
          desc: obj.item.desc || "A delicious treat made with premium ingredients.",
          image: obj.item.item_image_url,
          category: currentCategory.trim() === '' ? 'Popular' : currentCategory,
          price: Math.floor(Math.random() * (599 - 199 + 1) + 199),
          weight: "500g"
        });
      }
    }
    
    Object.values(obj).forEach(val => extractItems(val, currentCategory));
  }
  
  extractItems(data);
  console.log(`Found ${items.length} items with images and ${categories.size} categories.`);

  // Clear existing
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  console.log("Cleared existing data.");

  // Insert Categories
  const catMap = {};
  for (const catName of Array.from(categories)) {
    const cat = await prisma.category.create({
      data: { name: catName, image: items.find(i => i.category === catName)?.image || null }
    });
    catMap[catName] = cat.id;
  }
  
  // Create 'Popular' if it doesn't exist
  if (!catMap['Popular']) {
     const popCat = await prisma.category.create({
       data: { name: 'Popular', image: items[0]?.image || null }
     });
     catMap['Popular'] = popCat.id;
  }

  // Insert Products
  for (const item of items.slice(0, 40)) { // Limit to 40 items so it's not crazy
    const isVeg = Math.random() > 0.1; // 90% veg
    const isEggless = isVeg && Math.random() > 0.4; // 60% of veg is eggless
    const isBestseller = Math.random() > 0.8; // 20% bestsellers
    const badges = ["New", "Chef's Special", "Limited Edition", null, null, null];
    const badge = badges[Math.floor(Math.random() * badges.length)];

    await prisma.product.create({
      data: {
        name: item.name,
        description: item.desc,
        price: item.price,
        weight: item.weight,
        image: item.image,
        categoryId: catMap[item.category] || catMap['Popular'],
        isVeg,
        isEggless,
        isBestseller,
        badge
      }
    });
  }
  
  console.log("Database seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
