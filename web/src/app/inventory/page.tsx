import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type InventoryRow = {
  title: string;
  total_copies: number;
  available_copies: number;
  loaned_copies: number;
  inventory_status: string;
};

export default async function InventoryPage() {

  const result = await pool.query(`
    SELECT title, total_copies, available_copies, loaned_copies, inventory_status
    FROM vw_inventory_health
    ORDER BY total_copies DESC
    LIMIT 20
  `);

  const data: InventoryRow[] = result.rows;

  return (
    <div style={{ padding: 20 }}>
      <h1>Salud del inventario</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Libro</th>
            <th>Total copias</th>
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
