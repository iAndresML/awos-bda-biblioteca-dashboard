import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function FinesPage() {

  const result = await pool.query(`
    SELECT *
    FROM vw_fines_summary
    ORDER BY total_fines DESC
    LIMIT 20
  `);

  const data = result.rows;

  return (
    <div style={{ padding: 20 }}>
      <h1>Resumen de Multas</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Total Multas</th>
            <th>Pagadas</th>
            <th>Pendientes</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row: any, i: number) => (
            <tr key={i}>
              <td>{row.member_name}</td>
              <td>{row.total_fines}</td>
              <td>{row.paid_fines}</td>
              <td>{row.pending_fines}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
