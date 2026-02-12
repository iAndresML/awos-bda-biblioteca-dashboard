import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";

  const page = parseInt(searchParams.get("page") || "1");

  const limit = parseInt(searchParams.get("limit") || "10");

  const offset = (page - 1) * limit;

  let query = `
    SELECT *
    FROM vw_most_borrowed_books
    WHERE title ILIKE $1
       OR author ILIKE $1
    ORDER BY ranking
    LIMIT $2 OFFSET $3
  `;

  const values = [
    `%${search}%`,
    limit,
    offset
  ];

  const result = await pool.query(query, values);

  return NextResponse.json(result.rows);

}
