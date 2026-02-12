import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type MemberRow = {
  member_name: string;
  total_loans: number;
  activity_status: string;
};

export default async function MembersPage() {

  const result = await pool.query(`
    SELECT member_name, total_loans, activity_status
    FROM vw_member_activity
    ORDER BY total_loans DESC
    LIMIT 20
  `);

  const data: MemberRow[] = result.rows;

  return (
    <div style={{ padding: 20 }}>
      <h1>Actividad de usuarios</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Total préstamos</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.member_name}</td>
              <td>{row.total_loans}</td>
              <td>{row.activity_status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
