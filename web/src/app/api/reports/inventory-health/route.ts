import { Pool } from "pg";
import { NextResponse } from "next/server";

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "appuser",
  password: "apppass",
  database: "biblioteca",
});

export async function GET() {

  const result = await pool.query(`
    SELECT
      title,
      total_copies,
      available_copies,
      loaned_copies,
      inventory_status
    FROM vw_inventory_health
    ORDER BY total_copies DESC
    LIMIT 20
  `);

  return NextResponse.json(result.rows);

}
