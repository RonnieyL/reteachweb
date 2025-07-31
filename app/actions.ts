// app/actions.ts
"use server";

import { neon } from "@neondatabase/serverless";
import { z } from 'zod';

export async function getData() {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not set");
    }
    const sql = neon(process.env.DATABASE_URL);
    const data = await sql`...`;
    return data;
}

// Server-side email validation schema
const serverEmailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email format")
  .max(254, "Email address is too long")

export async function createEntry(email: string) {
    // Validate email on server-side as well
    const validationResult = serverEmailSchema.safeParse(email)
    
    if (!validationResult.success) {
        throw new Error(validationResult.error.issues[0].message)
    }

    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not set");
    }
    
    const sql = neon(process.env.DATABASE_URL);
    await sql`INSERT INTO waitlist (email) VALUES (${validationResult.data})`;
}