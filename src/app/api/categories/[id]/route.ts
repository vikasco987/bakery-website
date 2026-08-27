import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { id } = params;

    const category = await prisma.category.update({
      where: { id },
      data: {
        name: body.name,
        image: body.image !== undefined ? body.image : undefined,
      }
    });

    return NextResponse.json({ success: true, category }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    await prisma.category.delete({
      where: { id }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Note: Deleting a category might fail if products are linked to it (foreign key constraint).
    // In Prisma, we might need onDelete: Cascade in the schema, but we'll return 500 for now if it fails.
    return NextResponse.json({ error: "Failed to delete category (ensure no products are linked)" }, { status: 500 });
  }
}
