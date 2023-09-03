import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { links } from '../data/links';

async function main() {
  await prisma.user.create({
    data: {
      email: 'test@example.com',
      role: 'ADMIN',
    },
  });
  await prisma.link.createMany({
    data: links,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
