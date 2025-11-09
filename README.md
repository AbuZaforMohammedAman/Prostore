1) Basic Header Body and Footer done

2) npm i next-themes
npx shadcn@latest add dropdown-menu


<ModeToggle /> will be set in the navbar to control the day/night mode.

"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuLabel, 
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import { 
    SunIcon, 
    MoonIcon, 
    SunMoon 
} from "lucide-react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
                {theme === "system" ? (
                    <SunMoon />
                ): theme === "dark" ? (
                    <MoonIcon />
                ): (
                    <SunIcon />
                )}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>

            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                  checked={theme === "system"}
                  onClick={() => setTheme("system")}
              >
                  System
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                  checked={theme === "dark"}
                  onClick={() => setTheme("dark")}
              >
                  Dark
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                  checked={theme === "light"}
                  onClick={() => setTheme("light")}
              >
                  Light
              </DropdownMenuCheckboxItem>
            
        </DropdownMenuContent>
    </DropdownMenu>         
  );
}
       
export default ModeToggle;

3) NotFound & Loading page

4) npx shadcn@latest add sheet

5) npx shadcn@latest add card

6) Done

7) 
https://neon.com/pricing

DataBase:
https://vercel.com/azm-amans-projects/~/integrations/neon/icfg_FkXFEvkRez7Pxo9dgxWw92SJ/resources/storage/store_rlxQAZNQBBrXt7bZ/guides

npm i -D prisma @prisma/client
npx prisma init

Data Model:

model Product {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name        String
  slug        String   @unique(map: "product_slug_idx")
  category    String
  images      String[]
  brand       String
  description String
  stock       Int
  price       Decimal  @default(0) @db.Decimal(12, 2)
  rating      Decimal  @default(0) @db.Decimal(3, 2)
  numReviews  Int      @default(0)
  isFeatured  Boolean
  banner      String?
  createdAt   DateTime @default(now()) @db.Timestamp(6)
}

npx prisma generate
npx prisma migrate dev --name init
npx prisma studio

8) Creating a seed.ts file in db folder

import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });

    console.log("Database seeded successfully!");
}

main();

# Push schema to database

npx tsx ./db/seed

9) npm i @neondatabase/serverless @prisma/adapter-neon ws
And 
npm i -D @types/ws bufferutil

npx prisma generate

10) npx shadcn@latest add badge

Making the product details page (Done)

