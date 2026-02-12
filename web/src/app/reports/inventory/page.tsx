import { Pool } from "pg";

type InventoryRow = {
  title: string;
  total_copies: number;
  available_copies: number;
  loaned_copies: number;
  inventory_status: string;
};

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "appuser",
  password: "apppass",
  database: "biblioteca",
});

export default async function InventoryPage() {

  const result = await pool.query<InventoryRow>(`
    SELECT
      title,
      total_copies,
      available_copies,
      loaned_copies,
      inventory_status
    FROM vw_inventory_health
    ORDER BY total_copies DESC
    LIMIT 20
  `);

  const data = result.rows;

  return (
    <div style={{ padding: 20 }}>
      <h1>Salud del inventario</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Libro</th>
            <th>Total</th>
            <th>Disponibles</th>
            <th>Prestadas</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.title}</td>
              <td>{row.total_copies}</td>
              <td>{row.available_copies}</td>
              <td>{row.loaned_copies}</td>
              <td>{row.inventory_status}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
