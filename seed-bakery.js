const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const categoriesData = [
  { name: "Signature Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Artisan Breads", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Pastries & Cupcakes", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Cookies & Biscuits", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Savoury Bakes", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

const productsData = [
  // Signature Cakes
  { name: "Belgian Chocolate Truffle Cake", desc: "Rich and dense chocolate cake layered with dark Belgian chocolate ganache.", price: 899, weight: "500g", category: "Signature Cakes", isVeg: true, isEggless: true, isBestseller: true, badge: "Chef's Special", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Red Velvet Cream Cheese Cake", desc: "Classic red velvet sponge with layers of authentic cream cheese frosting.", price: 950, weight: "500g", category: "Signature Cakes", isVeg: true, isEggless: false, isBestseller: true, badge: "Bestseller", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Fresh Fruit Gateau", desc: "Vanilla sponge layered with fresh seasonal fruits and light whipped cream.", price: 799, weight: "500g", category: "Signature Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Black Forest Classic", desc: "Traditional German chocolate cake with cherry filling and whipped cream.", price: 650, weight: "500g", category: "Signature Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  
  // Artisan Breads
  { name: "Sourdough Boule", desc: "Naturally leavened artisan sourdough with a crusty exterior and chewy crumb.", price: 250, weight: "400g", category: "Artisan Breads", isVeg: true, isEggless: true, isBestseller: true, badge: "Organic", image: "https://images.unsplash.com/photo-1585478259715-876a6a81fa08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "French Baguette", desc: "Classic long and crusty French loaf, perfect for sandwiches and bruschetta.", price: 120, weight: "300g", category: "Artisan Breads", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Multigrain Healthy Loaf", desc: "Packed with sunflower seeds, flaxseeds, and oats for a healthy start.", price: 180, weight: "400g", category: "Artisan Breads", isVeg: true, isEggless: true, isBestseller: true, badge: "Healthy", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Pastries & Cupcakes
  { name: "Chocolate Hazelnut Tart", desc: "Crispy tart shell filled with gooey chocolate hazelnut ganache.", price: 180, weight: "1 Piece", category: "Pastries & Cupcakes", isVeg: true, isEggless: true, isBestseller: true, badge: "New", image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Blueberry Cheesecake Slice", desc: "New York style baked cheesecake topped with homemade blueberry compote.", price: 220, weight: "1 Piece", category: "Pastries & Cupcakes", isVeg: true, isEggless: false, isBestseller: true, badge: "Bestseller", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Classic Vanilla Cupcake", desc: "Soft vanilla sponge topped with a swirl of rich buttercream frosting.", price: 90, weight: "1 Piece", category: "Pastries & Cupcakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  
  // Cookies & Biscuits
  { name: "Chunky Chocolate Chip Cookie", desc: "Soft, chewy, and loaded with dark chocolate chunks.", price: 80, weight: "1 Piece", category: "Cookies & Biscuits", isVeg: true, isEggless: true, isBestseller: true, badge: "Must Try", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Almond Biscotti", desc: "Twice-baked crunchy Italian almond biscuits, perfect with coffee.", price: 250, weight: "200g", category: "Cookies & Biscuits", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  
  // Savoury Bakes
  { name: "Butter Croissant", desc: "Flaky, buttery, and authentic French croissant baked fresh every morning.", price: 150, weight: "1 Piece", category: "Savoury Bakes", isVeg: true, isEggless: false, isBestseller: true, badge: "Bestseller", image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Cheese & Jalapeno Bagel", desc: "Chewy bagel topped with melted cheddar cheese and spicy jalapenos.", price: 140, weight: "1 Piece", category: "Savoury Bakes", isVeg: true, isEggless: true, isBestseller: false, badge: "Spicy", image: "https://images.unsplash.com/photo-1585675100414-22cb7f68c3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Spinach & Feta Quiche", desc: "Savoury shortcrust pastry filled with a rich egg custard, spinach, and feta.", price: 190, weight: "1 Piece", category: "Savoury Bakes", isVeg: true, isEggless: false, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

async function main() {
  console.log("Clearing existing food database...");
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  console.log("Seeding authentic bakery menu...");

  // Insert Categories
  const catMap = {};
  for (const cat of categoriesData) {
    const createdCat = await prisma.category.create({
      data: { name: cat.name, image: cat.image }
    });
    catMap[cat.name] = createdCat.id;
  }

  // Insert Products
  for (const item of productsData) {
    await prisma.product.create({
      data: {
        name: item.name,
        description: item.desc,
        price: item.price,
        weight: item.weight,
        image: item.image,
        categoryId: catMap[item.category],
        isVeg: item.isVeg,
        isEggless: item.isEggless,
        isBestseller: item.isBestseller,
        badge: item.badge
      }
    });
  }

  console.log(`Successfully seeded ${productsData.length} bakery items across ${categoriesData.length} categories!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
