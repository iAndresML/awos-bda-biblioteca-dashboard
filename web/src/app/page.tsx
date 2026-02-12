import Link from "next/link";

export default function Home() {

  return (

    <div>

      <h1>Dashboard Biblioteca</h1>

      <ul>

        <li>
          <Link href="/reports/most-borrowed">
            Libros más prestados
          </Link>
        </li>

        <li>
          <Link href="/reports/overdue">
            Préstamos vencidos
          </Link>
        </li>

        <li>
          <Link href="/reports/fines-summary">
            Multas
          </Link>
        </li>

        <li>
          <Link href="/reports/member-activity">
            Actividad usuarios
          </Link>
        </li>

        <li>
          <Link href="/reports/inventory-health">
            Inventario
          </Link>
        </li>

      </ul>

    </div>
  );
}
