// backend/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // 1. Create Collections
  const signature = await prisma.collection.upsert({
    where: { slug: 'signature' },
    update: {},
    create: {
      name: 'The Signature',
      slug: 'signature',
      description: 'The pinnacle of AKÓKÒ craftsmanship, blending African heritage with Swiss precision.',
    },
  });

  const classic = await prisma.collection.upsert({
    where: { slug: 'classic' },
    update: {},
    create: {
      name: 'The Classic',
      slug: 'classic',
      description: 'Timeless elegance for the modern professional.',
    },
  });

  // 2. Create Products
  await prisma.product.upsert({
    where: { slug: 'the-sovereign-gold' },
    update: {},
    create: {
      name: 'The Sovereign Gold',
      slug: 'the-sovereign-gold',
      description: 'A masterpiece of modern African luxury. Features a 24k gold-plated case, sapphire crystal face, and a hand-stitched alligator leather strap.',
      shortDesc: '24k Gold-Plated Automatic',
      price: 12500,
      comparePrice: 15000,
      collectionId: signature.id,
      movement: 'Swiss Automatic (Sellita SW200)',
      caseSize: '42mm',
      caseMaterial: '316L Stainless Steel / 24k Gold Plating',
      dialColor: 'Obsidian Black',
      waterResistance: '50m (5 ATM)',
      strapMaterial: 'Genuine Alligator Leather',
      strapColor: 'Midnight Black',
      stock: 15,
      sku: 'AKO-SIG-001',
      images: ['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800'],
      mainImage: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800',
      isNew: true,
      isFeatured: true,
      isActive: true,
    },
  });

  await prisma.product.upsert({
    where: { slug: 'midnight-chronograph' },
    update: {},
    create: {
      name: 'Midnight Chronograph',
      slug: 'midnight-chronograph',
      description: 'Designed for the night. A deep obsidian ceramic finish with subtle champagne gold accents for the discerning professional.',
      shortDesc: 'Ceramic Chronograph',
      price: 8900,
      collectionId: classic.id,
      movement: 'Swiss Quartz Chronograph',
      caseSize: '40mm',
      caseMaterial: 'Black Ceramic / Titanium',
      dialColor: 'Matte Black',
      waterResistance: '100m (10 ATM)',
      strapMaterial: 'Black Rubber / Steel Bracelet',
      strapColor: 'Black',
      stock: 30,
      sku: 'AKO-CLA-002',
      images: ['https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&q=80&w=800'],
      mainImage: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&q=80&w=800',
      isFeatured: true,
      isActive: true,
    },
  });

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });