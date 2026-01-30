import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const complaints = await prisma.complaint.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(complaints)
}

export async function POST(request) {
  const body = await request.json()

  const complaint = await prisma.complaint.create({
    data: {
      title: body.title,
      description: body.description,
      userId: body.userId,
    },
  })

  return NextResponse.json(complaint, { status: 201 })
}
