import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {

  const query = `
    SELECT
      month,
      total_fines,
      paid_fines,
      unpaid_fines
    FROM vw_fines_summary
    ORDER BY month DESC
  `;

  const result = await pool.query(query);

  return NextResponse.json(result.rows);

}
