import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });

    console.log("Database seeded successfully!");
}

main();

/*
import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.product.deleteMany();

    // Seed new data
    await prisma.product.createMany({ 
        data: sampleData.products 
    });

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error("Seeding failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

*/