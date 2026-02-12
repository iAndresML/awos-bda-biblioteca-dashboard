import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const min_days = Number(searchParams.get("min_days") || "0");
  const page = Number(searchParams.get("page") || "1");
  const limit = Number(searchParams.get("limit") || "10");

  const offset = (page - 1) * limit;

  const query = `
    SELECT
      member_name,
      book_title,
      due_at,
      days_overdue,
      fine_suggested
    FROM vw_overdue_loans
    WHERE days_overdue >= $1
    ORDER BY days_overdue DESC
    LIMIT $2 OFFSET $3
  `;

  const values = [min_days, limit, offset];

  const result = await pool.query(query, values);

  return NextResponse.json(result.rows);

}
