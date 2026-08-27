import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categoryImages = {
  'Birthday Cakes': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'Chocolate Cakes': 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'Fruit Cakes': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'Custom Cakes': 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'Pastries': 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'Donuts': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'Bakery & Snacks': 'https://images.unsplash.com/photo-1509365465994-3e2840bf24a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
};

const productImages = {
  'Birthday Cakes': [
    'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&q=80',
    'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80',
    'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80',
  ],
  'Chocolate Cakes': [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80',
    'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=800&q=80'
  ],
  'Fruit Cakes': [
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80'
  ],
  'Pastries': [
    'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
    'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&q=80',
    'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80'
  ],
  'Donuts': [
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80',
    'https://images.unsplash.com/photo-1534950947221-dc29633c706d?w=800&q=80'
  ],
  'Bakery & Snacks': [
    'https://images.unsplash.com/photo-1509365465994-3e2840bf24a1?w=800&q=80',
    'https://images.unsplash.com/photo-1530610476181-d83430b64dcb?w=800&q=80',
    'https://images.unsplash.com/photo-1589367920969-ab8e050bfc3b?w=800&q=80'
  ]
};

async function main() {
  const categories = await prisma.category.findMany();
  
  for (const cat of categories) {
    // Fix category image
    const cImg = categoryImages[cat.name as keyof typeof categoryImages] || categoryImages['Birthday Cakes'];
    await prisma.category.update({
      where: { id: cat.id },
      data: { image: cImg }
    });
    console.log(`Updated category ${cat.name}`);

    // Fix product images
    const products = await prisma.product.findMany({ where: { categoryId: cat.id } });
    const imgList = productImages[cat.name as keyof typeof productImages] || productImages['Birthday Cakes'];
    
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const pImg = imgList[i % imgList.length];
      await prisma.product.update({
        where: { id: p.id },
        data: { image: pImg }
      });
      console.log(`Updated product ${p.name}`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
