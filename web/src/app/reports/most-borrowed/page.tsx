import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type BookRow = {
  title: string;
  author: string;
  borrow_count: number;
  rank: number;
};

export default async function MostBorrowedPage() {

  const result = await pool.query(`
    SELECT title, author, borrow_count, rank
    FROM vw_most_borrowed_books
    ORDER BY rank
    LIMIT 20
  `);

  const data: BookRow[] = result.rows;

  return (
    <div style={{ padding: 20 }}>
      <h1>Libros más prestados</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Préstamos</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.rank}</td>
              <td>{row.title}</td>
              <td>{row.author}</td>
              <td>{row.borrow_count}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
