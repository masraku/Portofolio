import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const admin = await prisma.user.create({
    data: {
      name: "Admin Demo",
      email: "admin@demo.com",
      password: "demo123",
      role: "ADMIN",
    },
  })

  const company = await prisma.company.create({
    data: {
      name: "Startup Tech",
    },
  })

  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        location: "Remote",
        companyId: company.id,
      },
      {
        title: "Backend Developer",
        location: "Jakarta",
        companyId: company.id,
      },
    ],
  })

  console.log("✅ Seed data inserted")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
