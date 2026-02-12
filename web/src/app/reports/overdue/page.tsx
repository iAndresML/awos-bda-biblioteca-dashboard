import { Pool } from "pg";
export const dynamic = "force-dynamic";

type OverdueRow = {
  member_name: string;
  book_title: string;
  due_at: string;
  days_overdue: number;
  suggested_fine: number;
};

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "appuser",
  password: "apppass",
  database: "biblioteca",
});

export default async function OverduePage() {

  const result = await pool.query<OverdueRow>(`
    SELECT
      member_name,
      book_title,
      due_at,
      days_overdue,
      suggested_fine
    FROM vw_overdue_loans
    ORDER BY days_overdue DESC
    LIMIT 20
  `);

  const data = result.rows;

  return (
    <div style={{ padding: 20 }}>
      <h1>Préstamos vencidos</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Libro</th>
            <th>Fecha límite</th>
            <th>Días atraso</th>
            <th>Multa sugerida</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.member_name}</td>
              <td>{row.book_title}</td>
              <td>{row.due_at}</td>
              <td>{row.days_overdue}</td>
              <td>${row.suggested_fine}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
