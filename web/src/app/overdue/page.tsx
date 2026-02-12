import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type OverdueRow = {
  member_name: string;
  title: string;
  due_at: string;
  days_overdue: number;
  suggested_fine: number;
};

export default async function OverduePage() {

  const result = await pool.query(`
    SELECT member_name, title, due_at, days_overdue, suggested_fine
    FROM vw_overdue_loans
    ORDER BY days_overdue DESC
    LIMIT 20
  `);

  const data: OverdueRow[] = result.rows;

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
              <td>{row.title}</td>
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
