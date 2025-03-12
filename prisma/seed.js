import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.nPC.create({
    data: {
      name: "Merric the Brave",
      description: "A bold warrior seeking vengeance.",
      characterSheetUrl: "https://example.com/merric-stats",
    },
  });

  console.log("Seed data added!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
