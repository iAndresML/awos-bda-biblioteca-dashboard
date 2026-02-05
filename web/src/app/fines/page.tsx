type Fine = {
  name: string;
  total: number;
};

async function getData(): Promise<Fine[]> {
  const r = await fetch("http://localhost:3000/api/fines", { cache: "no-store" });
  return r.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Resumen de multas</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
