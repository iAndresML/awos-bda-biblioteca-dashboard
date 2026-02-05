type Inventory = {
  title: string;
  total: number;
  available: number;
};

async function getData(): Promise<Inventory[]> {
  const r = await fetch("http://localhost:3000/api/inventory", { cache: "no-store" });
  return r.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Inventario</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Total</th>
            <th>Disponibles</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r: Inventory, i: number) => (
            <tr key={i}>
              <td>{r.title}</td>
              <td>{r.total}</td>
              <td>{r.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
