import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const settings = await prisma.storeSettings.findFirst();
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const existing = await prisma.storeSettings.findFirst();
    
    let settings;
    if (existing) {
      settings = await prisma.storeSettings.update({
        where: { id: existing.id },
        data: {
          isWhatsAppFormEnabled: data.isWhatsAppFormEnabled,
        },
      });
    } else {
      settings = await prisma.storeSettings.create({
        data: {
          isWhatsAppFormEnabled: data.isWhatsAppFormEnabled,
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
