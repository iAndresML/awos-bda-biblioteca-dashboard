"use client";

import { useEffect, useState } from "react";

type Book = {
  title: string;
  author: string;
  total_loans: number;
  ranking: number;
};

export default function Page() {

  const [data, setData] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  async function loadData() {

    const res = await fetch(`/api/reports/most-borrowed?search=${search}&page=1&limit=10`);

    const json = await res.json();

    setData(json);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (

    <div>

      <h1>Libros más prestados</h1>

      <input
        placeholder="Buscar título o autor"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={loadData}>
        Buscar
      </button>

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

          {data.map((b, i) => (

            <tr key={i}>
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
