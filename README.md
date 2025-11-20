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

11) 
Domain: https://prostorenew.vercel.app/

12)
from : https://authjs.dev/getting-started/adapters/prisma

getting the User, Account, Session & VerificationToken model

npx prisma generate
npx prisma migrate dev --name add_user_based_tables

The following migration(s) have been created and applied from new schema changes:

prisma\migrations/
  └─ 20251110214618_add_user_based_tables/
    └─ migration.sql

Your database is now in sync with your schema

npx prisma studio

13)
npm i bcrypt-ts-edge   [Used for password]

const sampleData = {
  users:  [
    {
      name: 'Aman',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Abdullah',
      email: 'user@example.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],

  async function main() {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });
    await prisma.user.createMany({ data: sampleData.users });

    console.log("Database seeded successfully!");
}

main();

npx tsx ./db/seed

14) NextAuth Authentication system.
npm i next-auth@beta & npm i @auth/prisma-adapter
cmd:  openssl rand -base64 32

D:\Next.js project\prostore>openssl rand -base64 32
lwvlKGLY5mWtbIPBaduHShfavO2jZ7YSJsai6JuSOyw=

IN .env
NEXTAUTH_SECRET="lwvlKGLY5mWtbIPBaduHShfavO2jZ7YSJsai6JuSOyw="

making a file in root named auth.ts

15) making a folder in app named api/auth

app/api/auth/[...nextauth]

in validators.ts 
// Schema for signing users in
export const signInFormSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

than making user.actions.ts in actions folder

16) 
npx shadcn@latest add label input
make app/(auth)/sign-in/layout.tsx
credentials-signin-form.tsx & page.tsx

Now it will signIn

http://localhost:3000/api/auth/session

17)
making the components/header/user-button.tsx

validators.tsx
// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

update user.action.ts

18) Complete