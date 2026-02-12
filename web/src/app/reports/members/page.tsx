"use client";

import { useEffect, useState } from "react";

interface Member {
  member_name: string;
  total_loans: number;
  late_returns: number;
}

export default function MembersPage() {

  const [data, setData] = useState<Member[]>([]);

  async function loadData() {

    const res = await fetch("/api/reports/members");

    const json = await res.json();

    setData(json);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: 20 }}>

      <h1>Actividad de usuarios</h1>

      <table border={1} cellPadding={5}>

        <thead>
          <tr>
            <th>Usuario</th>
            <th>Total préstamos</th>
            <th>Retrasos</th>
          </tr>
        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index}>
              <td>{row.member_name}</td>
              <td>{row.total_loans}</td>
              <td>{row.late_returns}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
