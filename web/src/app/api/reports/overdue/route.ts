import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const min_days = parseInt(searchParams.get("min_days") || "0");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const offset = (page - 1) * limit;

  const query = `
    SELECT *
    FROM vw_overdue_loans
    WHERE dias_atraso >= $1
    ORDER BY dias_atraso DESC
    LIMIT $2 OFFSET $3
  `;

  const values = [min_days, limit, offset];

  const result = await pool.query(query, values);

  return NextResponse.json(result.rows);
}
