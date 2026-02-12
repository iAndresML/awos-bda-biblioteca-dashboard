import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {

  const result = await pool.query(`
    SELECT *
    FROM vw_fines_summary
    ORDER BY total_amount DESC
  `);

  return NextResponse.json(result.rows);
}
