export const dynamic = "force-dynamic";

type InventoryRow = {
  title: string;
  total_copies: number;
  available_copies: number;
  loaned_copies: number;
  inventory_status: string;
};

export default async function InventoryPage() {

  const res = await fetch("http://web:3000/api/reports/inventory", {
    cache: "no-store",
  });

  const data: InventoryRow[] = await res.json();

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
