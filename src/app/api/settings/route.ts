import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    let settings = await prisma.storeSettings.findFirst();
    if (!settings) {
      settings = await prisma.storeSettings.create({ data: {} });
    }
    return NextResponse.json({ settings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let settings = await prisma.storeSettings.findFirst();
    
    if (settings) {
      settings = await prisma.storeSettings.update({
        where: { id: settings.id },
        data: { isWhatsAppFormEnabled: body.isWhatsAppFormEnabled }
      });
    } else {
      settings = await prisma.storeSettings.create({
        data: { isWhatsAppFormEnabled: body.isWhatsAppFormEnabled }
      });
    }

    return NextResponse.json({ success: true, settings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
