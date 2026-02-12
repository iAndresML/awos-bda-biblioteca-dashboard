"use client";

import { useEffect, useState } from "react";

export default function OverdueReport() {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/reports/overdue")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Préstamos vencidos</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Libro</th>
            <th>Usuario</th>
            <th>Días atraso</th>
            <th>Multa sugerida</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.title}</td>
              <td>{row.member_name}</td>
              <td>{row.days_overdue}</td>
              <td>${row.suggested_fine}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
