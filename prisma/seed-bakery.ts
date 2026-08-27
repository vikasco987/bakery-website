import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fallbackImage = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1089&ixlib=rb-4.0.3';

async function fetchFoodSnapImage(query: string): Promise<string> {
  try {
    const res = await fetch(`https://manager.foodsnap.in/api/image/search?q=${encodeURIComponent(query)}&page=1&limit=1`, { timeout: 10000 } as any);
    if (!res.ok) return fallbackImage;
    const data = await res.json();
    if (data?.completed && data.completed.length > 0) {
      return data.completed[0].imageUrl || data.completed[0].image || data.completed[0].cloudinaryUrl || fallbackImage;
    }
  } catch (error) {
    console.error(`Failed to fetch image for ${query}`, error);
  }
  return fallbackImage;
}

const categories = [
  { name: 'Birthday Cakes' },
  { name: 'Chocolate Cakes' },
  { name: 'Fruit Cakes' },
  { name: 'Pastries' },
  { name: 'Donuts' },
  { name: 'Bakery & Snacks' },
];

const productData = [
  // Birthday Cakes
  { name: "Classic Vanilla Birthday Cake", query: "Vanilla Birthday Cake", categoryIndex: 0, price: 499 },
  { name: "Butterscotch Delight", query: "Butterscotch Cake", categoryIndex: 0, price: 549 },
  { name: "Black Forest Special", query: "Black Forest Cake", categoryIndex: 0, price: 599 },
  { name: "Red Velvet Heart", query: "Red Velvet Cake", categoryIndex: 0, price: 799 },
  { name: "White Forest Dream", query: "White Forest Cake", categoryIndex: 0, price: 649 },
  { name: "Oreo Crunch Cake", query: "Oreo Cake", categoryIndex: 0, price: 699 },
  { name: "Mango Burst Cake", query: "Mango Cake", categoryIndex: 0, price: 749 },
  { name: "Strawberry Bliss", query: "Strawberry Cake", categoryIndex: 0, price: 599 },
  { name: "KitKat Gems Cake", query: "KitKat Cake", categoryIndex: 0, price: 849 },
  { name: "Rainbow Sprinkles Cake", query: "Rainbow Cake", categoryIndex: 0, price: 799 },

  // Chocolate Cakes
  { name: "Chocolate Truffle", query: "Chocolate Truffle Cake", categoryIndex: 1, price: 699 },
  { name: "Death By Chocolate", query: "Death By Chocolate Cake", categoryIndex: 1, price: 899 },
  { name: "Choco Lava Cake", query: "Choco Lava Cake", categoryIndex: 1, price: 249 },
  { name: "Ferrero Rocher Cake", query: "Ferrero Rocher Cake", categoryIndex: 1, price: 999 },
  { name: "Nutella Hazelnut Cake", query: "Nutella Cake", categoryIndex: 1, price: 849 },
  { name: "Chocolate Walnut Brownie Cake", query: "Brownie Cake", categoryIndex: 1, price: 749 },
  { name: "Choco Chip Delight", query: "Choco Chip Cake", categoryIndex: 1, price: 599 },
  { name: "Dark Chocolate Fantasy", query: "Dark Chocolate Cake", categoryIndex: 1, price: 799 },
  { name: "Chocolate Fudge Cake", query: "Chocolate Fudge Cake", categoryIndex: 1, price: 849 },
  { name: "Choco Caramel Crunch", query: "Chocolate Caramel Cake", categoryIndex: 1, price: 749 },

  // Fruit Cakes
  { name: "Fresh Fruit Overload", query: "Fresh Fruit Cake", categoryIndex: 2, price: 899 },
  { name: "Pineapple Classic", query: "Pineapple Cake", categoryIndex: 2, price: 499 },
  { name: "Kiwi Strawberry Cake", query: "Kiwi Strawberry Cake", categoryIndex: 2, price: 799 },
  { name: "Mixed Berry Cake", query: "Mixed Berry Cake", categoryIndex: 2, price: 849 },
  { name: "Blueberry Cheesecake", query: "Blueberry Cheesecake", categoryIndex: 2, price: 999 },
  { name: "Lychee Rose Cake", query: "Lychee Cake", categoryIndex: 2, price: 849 },
  { name: "Orange Zest Cake", query: "Orange Cake", categoryIndex: 2, price: 549 },
  { name: "Plum Cake", query: "Plum Cake", categoryIndex: 2, price: 449 },

  // Pastries
  { name: "Black Forest Pastry", query: "Black Forest Pastry", categoryIndex: 3, price: 90 },
  { name: "Chocolate Truffle Pastry", query: "Chocolate Truffle Pastry", categoryIndex: 3, price: 120 },
  { name: "Pineapple Pastry", query: "Pineapple Pastry", categoryIndex: 3, price: 80 },
  { name: "Red Velvet Pastry", query: "Red Velvet Pastry", categoryIndex: 3, price: 130 },
  { name: "Butterscotch Pastry", query: "Butterscotch Pastry", categoryIndex: 3, price: 100 },
  { name: "Strawberry Pastry", query: "Strawberry Pastry", categoryIndex: 3, price: 100 },
  { name: "Mango Pastry", query: "Mango Pastry", categoryIndex: 3, price: 110 },
  { name: "Oreo Pastry", query: "Oreo Pastry", categoryIndex: 3, price: 120 },
  { name: "Dutch Truffle Pastry", query: "Dutch Truffle Pastry", categoryIndex: 3, price: 140 },
  { name: "Choco Lava Cup", query: "Choco Lava Cup", categoryIndex: 3, price: 99 },

  // Donuts
  { name: "Classic Glazed Donut", query: "Glazed Donut", categoryIndex: 4, price: 80 },
  { name: "Chocolate Frosting Donut", query: "Chocolate Donut", categoryIndex: 4, price: 99 },
  { name: "Strawberry Sprinkle Donut", query: "Strawberry Donut", categoryIndex: 4, price: 110 },
  { name: "Boston Cream Donut", query: "Boston Cream Donut", categoryIndex: 4, price: 130 },
  { name: "Oreo Crumble Donut", query: "Oreo Donut", categoryIndex: 4, price: 120 },
  { name: "Nutella Filled Donut", query: "Nutella Donut", categoryIndex: 4, price: 150 },
  { name: "Caramel Crunch Donut", query: "Caramel Donut", categoryIndex: 4, price: 120 },
  { name: "Cinnamon Sugar Donut", query: "Cinnamon Donut", categoryIndex: 4, price: 90 },

  // Bakery & Snacks
  { name: "Butter Croissant", query: "Butter Croissant", categoryIndex: 5, price: 120 },
  { name: "Chocolate Croissant", query: "Chocolate Croissant", categoryIndex: 5, price: 150 },
  { name: "Cheese & Garlic Bread", query: "Garlic Bread", categoryIndex: 5, price: 180 },
  { name: "Veg Puff", query: "Veg Puff", categoryIndex: 5, price: 40 },
  { name: "Paneer Tikka Puff", query: "Paneer Puff", categoryIndex: 5, price: 60 },
  { name: "Chicken Puff", query: "Chicken Puff", categoryIndex: 5, price: 80 },
  { name: "Almond Biscotti (200g)", query: "Almond Biscotti", categoryIndex: 5, price: 250 },
  { name: "Choco Chip Cookies (250g)", query: "Choco Chip Cookies", categoryIndex: 5, price: 199 },
];

async function main() {
  console.log("Cleaning database...");
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log("Seeding categories...");
  const createdCategories = [];
  for (const cat of categories) {
    const imageUrl = await fetchFoodSnapImage(cat.name);
    const created = await prisma.category.create({
      data: {
        name: cat.name,
        image: imageUrl
      }
    });
    createdCategories.push(created);
    console.log(`Created category: ${cat.name}`);
  }

  console.log("Seeding products... This might take a few minutes as it fetches images.");
  for (const prod of productData) {
    const category = createdCategories[prod.categoryIndex];
    const imageUrl = await fetchFoodSnapImage(prod.query);
    
    await prisma.product.create({
      data: {
        categoryId: category.id,
        name: prod.name,
        description: `Freshly baked ${prod.name.toLowerCase()} specially crafted for you.`,
        price: prod.price,
        weight: '500g',
        image: imageUrl,
        isAvailable: true,
        isVeg: !prod.name.toLowerCase().includes('chicken'),
        isEggless: true,
        isBestseller: Math.random() > 0.8,
      }
    });
    console.log(`Created product: ${prod.name}`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
