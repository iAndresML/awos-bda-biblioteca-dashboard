"use client";

import { useEffect, useState } from "react";

type Book = {
  title: string;
  author: string;
  total_loans: number;
  ranking: number;
};

export default function Page() {

  const [books, setBooks] = useState<Book[]>([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  async function loadBooks() {

    const res = await fetch(
      `/api/books?search=${search}&page=${page}&limit=10`
    );

    const data = await res.json();

    setBooks(data);

  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (

    <div>

      <h1>Libros más prestados</h1>

      <input
        placeholder="Buscar por título o autor"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => loadBooks()}>
        Buscar
      </button>

      <table border={1}>

        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Total préstamos</th>
            <th>Ranking</th>
          </tr>
        </thead>

        <tbody>

          {books.map((b, i) => (

            <tr key={i}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.total_loans}</td>
              <td>{b.ranking}</td>
            </tr>

          ))}

        </tbody>

      </table>

      <button onClick={() => {
        setPage(page - 1);
        loadBooks();
      }}>
        Anterior
      </button>

      <button onClick={() => {
        setPage(page + 1);
        loadBooks();
      }}>
        Siguiente
      </button>

    </div>

  );

}
