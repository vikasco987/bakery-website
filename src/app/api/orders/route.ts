import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateOrderNumber() {
  const prefix = "BK";
  const num = Math.floor(1000 + Math.random() * 9000); // 4 digit random
  return `${prefix}${num}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request
    if (!body.items || !body.totalAmount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const orderNumber = generateOrderNumber();

    const order = await prisma.order.create({
      data: {
        orderNumber,
        customerName: body.customerName || "Unknown",
        phone: body.phone || "N/A",
        address: body.address || "N/A",
        items: body.items,
        totalAmount: body.totalAmount,
        orderType: body.orderType || "WEBSITE", // WHATSAPP or WEBSITE
        status: "PENDING",
      }
    });

    return NextResponse.json({ success: true, order }, { status: 201 });
  } catch (error) {
    console.error("Order creation failed", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get("type"); // e.g., WHATSAPP, WEBSITE
    const status = url.searchParams.get("status");

    let whereClause: any = {};
    if (type && type !== "All") whereClause.orderType = type;
    if (status && status !== "All") whereClause.status = status;

    const orders = await prisma.order.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
