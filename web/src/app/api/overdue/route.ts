import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const r = await pool.query("SELECT * FROM vw_overdue_loans");
  return NextResponse.json(r.rows);
}
