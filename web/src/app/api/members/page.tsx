type Member = {
  name: string;
  total: number;
  status: string;
};

async function getData(): Promise<Member[]> {
  const r = await fetch("http://localhost:3000/api/members", { cache: "no-store" });
  return r.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Actividad de usuarios</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Préstamos</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r: Member, i: number) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.total}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
