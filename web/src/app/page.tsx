async function getData() {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <h1>Libros más prestados</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Total</th>
            <th>Rank</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r: any, i: number) => (
            <tr key={i}>
              <td>{r.title}</td>
              <td>{r.total}</td>
              <td>{r.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
