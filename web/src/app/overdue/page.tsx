type Overdue = {
  name: string;
  title: string;
  status: string;
};

async function getData(): Promise<Overdue[]> {
  const r = await fetch("http://localhost:3000/api/overdue", { cache: "no-store" });
  return r.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Préstamos vencidos</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Libro</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.title}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
