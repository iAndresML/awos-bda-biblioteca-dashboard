type Book = {
  title: string;
  total: number;
  rank: number;
};

async function getData(): Promise<Book[]> {
  const r = await fetch("http://localhost:3000/api/books", { cache: "no-store" });
  return r.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <h1>Libros más prestados</h1>

      {/* buscador simple (solo visual) */}
      <input
        placeholder="Buscar por título..."
        style={{ padding: 8, width: 300, marginBottom: 20 }}
      />

      {/* tarjetas */}
      <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
        <div style={{ border: "1px solid #ccc", padding: 10 }}>Préstamos</div>
        <div style={{ border: "1px solid #ccc", padding: 10 }}>Multas</div>
        <div style={{ border: "1px solid #ccc", padding: 10 }}>Usuarios</div>
        <div style={{ border: "1px solid #ccc", padding: 10 }}>Inventario</div>
      </div>

      {/* tabla */}
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Total</th>
            <th>Rank</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
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

