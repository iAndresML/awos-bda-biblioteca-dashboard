import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {

  const result = await pool.query(`
    SELECT *
    FROM vw_inventory_health
  `);

  return NextResponse.json(result.rows);
}
