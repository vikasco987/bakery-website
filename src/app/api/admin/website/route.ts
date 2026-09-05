import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Check if a config already exists
    const existingConfig = await prisma.websiteConfig.findFirst();
    
    let config;
    if (existingConfig) {
      config = await prisma.websiteConfig.update({
        where: { id: existingConfig.id },
        data: {
          heroTitle: data.heroTitle,
          heroSubtitle: data.heroSubtitle,
          heroImage: data.heroImage,
          whatsappNumber: data.whatsappNumber,
          address: data.address,
          email: data.email,
          businessHours: data.businessHours,
          instagramUrl: data.instagramUrl,
          facebookUrl: data.facebookUrl,
          googleMapsUrl: data.googleMapsUrl,
        },
      });
    } else {
      config = await prisma.websiteConfig.create({
        data: {
          heroTitle: data.heroTitle || '',
          heroSubtitle: data.heroSubtitle || '',
          heroImage: data.heroImage || null,
          whatsappNumber: data.whatsappNumber || '',
          address: data.address || '',
          email: data.email || '',
          businessHours: data.businessHours || '',
          instagramUrl: data.instagramUrl || null,
          facebookUrl: data.facebookUrl || null,
          googleMapsUrl: data.googleMapsUrl || null,
        },
      });
    }

    return NextResponse.json(config);
  } catch (error) {
    console.error('Error updating website config:', error);
    return NextResponse.json({ error: 'Failed to update website config' }, { status: 500 });
  }
}
