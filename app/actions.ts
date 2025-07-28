// app/actions.ts
"use server";

import { neon } from "@neondatabase/serverless";

export async function getData() {
    const sql = neon(process.env.DATABASE_URL);
    const data = await sql`...`;
    return data;
}

export async function createEntry(email: string) {
    const sql = neon(process.env.DATABASE_URL);
    await sql`INSERT INTO waitlist (email) VALUES (${email})`;
}