import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {

  const result = await pool.query(`
    SELECT *
    FROM vw_member_activity
    ORDER BY total_loans DESC
  `);

  return NextResponse.json(result.rows);
}
