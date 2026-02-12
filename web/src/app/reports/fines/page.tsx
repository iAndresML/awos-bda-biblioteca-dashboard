"use client";

import { useEffect, useState } from "react";

interface Fine {
  member_name: string;
  total_fines: number;
  total_amount: number;
}

export default function FinesPage() {

  const [data, setData] = useState<Fine[]>([]);

  async function loadData() {

    const res = await fetch("/api/reports/fines");

    const json = await res.json();

    setData(json);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: 20 }}>

      <h1>Resumen de multas</h1>

      <table border={1} cellPadding={5}>

        <thead>
          <tr>
            <th>Usuario</th>
            <th>Total multas</th>
            <th>Monto total</th>
          </tr>
        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index}>
              <td>{row.member_name}</td>
              <td>{row.total_fines}</td>
              <td>${row.total_amount}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
