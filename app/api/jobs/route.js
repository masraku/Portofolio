import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const jobs = await prisma.job.findMany({
    include: { company: true },
  })

  return NextResponse.json(jobs)
}

export async function POST(request) {
  const body = await request.json()

  const job = await prisma.job.create({
    data: {
      title: body.title,
      location: body.location,
      companyId: body.companyId,
    },
  })

  return NextResponse.json(job, { status: 201 })
}
