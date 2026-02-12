"use client";

import { useEffect, useState } from "react";

interface Book {
  title: string;
  author: string;
  total_loans: number;
  ranking: number;
}

export default function MostBorrowedPage() {

  const [data, setData] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const limit = 10;

  async function loadData() {

    const res = await fetch(
      `/api/reports/most-borrowed?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}`
    );

    const json = await res.json();

    setData(json);
  }

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <div style={{ padding: 20 }}>

      <h1>Libros más prestados</h1>

      <input
        placeholder="Buscar por título o autor"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => { setPage(1); loadData(); }}>
        Buscar
      </button>

      <table border={1} cellPadding={5} style={{ marginTop: 20 }}>

        <thead>
          <tr>
            <th>Ranking</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Total préstamos</th>
          </tr>
        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index}>
              <td>{row.ranking}</td>
              <td>{row.title}</td>
              <td>{row.author}</td>
              <td>{row.total_loans}</td>
            </tr>

          ))}

        </tbody>

      </table>

      <div style={{ marginTop: 20 }}>

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </button>

        <span style={{ margin: 10 }}>
          Página {page}
        </span>

        <button
          onClick={() => setPage(page + 1)}
        >
          Siguiente
        </button>

      </div>

    </div>
  );
}
