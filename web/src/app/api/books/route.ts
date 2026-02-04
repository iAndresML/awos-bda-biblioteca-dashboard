import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const r = await pool.query("SELECT * FROM vw_most_borrowed_books");
  return NextResponse.json(r.rows);
}
