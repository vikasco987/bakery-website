const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const categoriesData = [
  { name: "Birthday Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Designer Cakes", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Anniversary Cakes", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Dry Cakes & Tea Cakes", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Pastries & Cupcakes", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

const productsData = [
  // Birthday Cakes
  { name: "Belgian Chocolate Truffle Cake", desc: "Rich and dense chocolate cake layered with dark Belgian chocolate ganache.", price: 899, weight: "500g", category: "Birthday Cakes", isVeg: true, isEggless: true, isBestseller: true, badge: "Chef's Special", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Black Forest Classic", desc: "Traditional German chocolate cake with cherry filling and whipped cream.", price: 650, weight: "500g", category: "Birthday Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Fresh Fruit Gateau", desc: "Vanilla sponge layered with fresh seasonal fruits and light whipped cream.", price: 799, weight: "500g", category: "Birthday Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Butterscotch Crunch Cake", desc: "Vanilla sponge with butterscotch chunks and caramel glaze.", price: 600, weight: "500g", category: "Birthday Cakes", isVeg: true, isEggless: true, isBestseller: true, badge: "Bestseller", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  
  // Designer Cakes
  { name: "Fondant Theme Cake (Kids)", desc: "Customized cartoon theme cake with colorful fondant.", price: 1500, weight: "1kg", category: "Designer Cakes", isVeg: true, isEggless: true, isBestseller: true, badge: "Custom", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "2-Tier Floral Wedding Cake", desc: "Elegant two-tier cake decorated with edible sugar flowers.", price: 3500, weight: "2kg", category: "Designer Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: "Premium", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Pinata Smash Cake", desc: "Chocolate shell filled with gems, chocolates and a mini cake inside.", price: 1200, weight: "750g", category: "Designer Cakes", isVeg: true, isEggless: true, isBestseller: true, badge: "Trending", image: "https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Anniversary Cakes
  { name: "Red Velvet Heart Cake", desc: "Heart shaped red velvet sponge with layers of authentic cream cheese frosting.", price: 1050, weight: "500g", category: "Anniversary Cakes", isVeg: true, isEggless: false, isBestseller: true, badge: "Bestseller", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Rosette Buttercream Cake", desc: "Beautiful pink rosette piped buttercream over a strawberry cake.", price: 900, weight: "500g", category: "Anniversary Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1562777717-b6aff34563a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Couple Silhouette Cake", desc: "Romantic cake with couple silhouette topper and golden flakes.", price: 1100, weight: "500g", category: "Anniversary Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: "New", image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Dry Cakes & Tea Cakes
  { name: "Banana Walnut Cake", desc: "Classic homestyle banana bread loaded with walnuts.", price: 350, weight: "300g", category: "Dry Cakes & Tea Cakes", isVeg: true, isEggless: false, isBestseller: true, badge: "Healthy", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Marble Teacake", desc: "Vanilla and chocolate swirled butter sponge cake.", price: 300, weight: "300g", category: "Dry Cakes & Tea Cakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

  // Pastries & Cupcakes
  { name: "Chocolate Hazelnut Tart", desc: "Crispy tart shell filled with gooey chocolate hazelnut ganache.", price: 180, weight: "1 Piece", category: "Pastries & Cupcakes", isVeg: true, isEggless: true, isBestseller: true, badge: "New", image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Blueberry Cheesecake Slice", desc: "New York style baked cheesecake topped with homemade blueberry compote.", price: 220, weight: "1 Piece", category: "Pastries & Cupcakes", isVeg: true, isEggless: false, isBestseller: true, badge: "Bestseller", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Red Velvet Cupcake", desc: "Soft red velvet sponge topped with cream cheese frosting.", price: 100, weight: "1 Piece", category: "Pastries & Cupcakes", isVeg: true, isEggless: true, isBestseller: false, badge: null, image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

async function main() {
  console.log("Clearing existing food database...");
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  console.log("Seeding all types of cakes...");

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

  console.log(`Successfully seeded ${productsData.length} cakes across ${categoriesData.length} categories!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
