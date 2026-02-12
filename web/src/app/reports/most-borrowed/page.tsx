import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";
  const page = Number(searchParams.get("page") || "1");
  const limit = Number(searchParams.get("limit") || "10");

  const offset = (page - 1) * limit;

  const query = `
    SELECT
      title,
      author,
      total_loans,
      rank_position
    FROM vw_most_borrowed_books
    WHERE title ILIKE $1
       OR author ILIKE $1
    ORDER BY rank_position
    LIMIT $2 OFFSET $3
  `;

  const values = [`%${search}%`, limit, offset];

  const result = await pool.query(query, values);

  return NextResponse.json(result.rows);

}
