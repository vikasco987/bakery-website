import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const orders = await prisma.order.findMany();

    const totalRevenue = orders
      .filter(o => o.status !== 'CANCELLED')
      .reduce((sum, order) => sum + order.totalAmount, 0);

    const pendingCount = orders.filter(o => o.status === 'PENDING').length;
    const deliveredCount = orders.filter(o => o.status === 'DELIVERED').length;
    const cancelledCount = orders.filter(o => o.status === 'CANCELLED').length;
    
    const whatsappCount = orders.filter(o => o.orderType === 'WHATSAPP').length;
    const websiteCount = orders.filter(o => o.orderType === 'WEBSITE').length;

    // Get 5 most recent orders
    const recentOrders = await prisma.order.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({
      metrics: {
        totalRevenue,
        pendingCount,
        deliveredCount,
        cancelledCount,
        whatsappCount,
        websiteCount,
        totalOrders: orders.length
      },
      recentOrders
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch sales data" }, { status: 500 });
  }
}
