import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type FineRow = {
  member_name: string;
  total_fines: number;
  paid_fines: number;
  pending_fines: number;
};

export default async function FinesPage() {

  const result = await pool.query(`
    SELECT member_name, total_fines, paid_fines, pending_fines
    FROM vw_fines_summary
    ORDER BY total_fines DESC
    LIMIT 20
  `);

  const data: FineRow[] = result.rows;

  return (
    <div style={{ padding: 20 }}>
      <h1>Resumen de multas</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Total multas</th>
            <th>Pagadas</th>
            <th>Pendientes</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.member_name}</td>
              <td>${row.total_fines}</td>
              <td>${row.paid_fines}</td>
              <td>${row.pending_fines}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
