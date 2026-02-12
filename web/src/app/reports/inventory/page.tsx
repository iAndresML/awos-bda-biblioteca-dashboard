"use client";

import { useEffect, useState } from "react";

interface Inventory {
  category: string;
  total_copies: number;
  available_copies: number;
  loaned_copies: number;
}

export default function InventoryPage() {

  const [data, setData] = useState<Inventory[]>([]);

  async function loadData() {

    const res = await fetch("/api/reports/inventory");

    const json = await res.json();

    setData(json);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: 20 }}>

      <h1>Salud del inventario</h1>

      <table border={1} cellPadding={5}>

        <thead>
          <tr>
            <th>Categoría</th>
            <th>Total copias</th>
            <th>Disponibles</th>
            <th>Prestadas</th>
          </tr>
        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index}>
              <td>{row.category}</td>
              <td>{row.total_copies}</td>
              <td>{row.available_copies}</td>
              <td>{row.loaned_copies}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
