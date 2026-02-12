async function getData() {

  const res = await fetch(
    "http://localhost:3000/api/books",
    {
      cache: "no-store"
    }
  );

  return res.json();

}

export default async function Page() {

  const data = await getData();

  const total = data.reduce(
    (sum: number, b: any) => sum + b.total_loans,
    0
  );

  return (

    <div>

      <h1>Libros más prestados</h1>

      <p>
        Este reporte muestra los libros con mayor demanda.
      </p>

      <h2>
        KPI Total préstamos: {total}
      </h2>

      <table border={1}>

        <thead>

          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Total</th>
            <th>Ranking</th>
          </tr>

        </thead>

        <tbody>

          {data.map((b: any) => (

            <tr key={b.id}>

              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.total_loans}</td>
              <td>{b.ranking}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}
