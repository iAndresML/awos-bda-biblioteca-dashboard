import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html>

      <body>

        <header style={{
          background: "#0f172a",
          color: "white",
          padding: "15px"
        }}>

          <h2>Biblioteca Dashboard</h2>

          <nav>

            <Link href="/" style={{ marginRight: 15 }}>
              Dashboard
            </Link>

            <Link href="/reports/most-borrowed" style={{ marginRight: 15 }}>
              Libros
            </Link>

            <Link href="/reports/overdue" style={{ marginRight: 15 }}>
              Morosidad
            </Link>

            <Link href="/reports/fines" style={{ marginRight: 15 }}>
              Multas
            </Link>

            <Link href="/reports/members" style={{ marginRight: 15 }}>
              Usuarios
            </Link>

            <Link href="/reports/inventory">
              Inventario
            </Link>

          </nav>

        </header>

        <main style={{ padding: 20 }}>
          {children}
        </main>

      </body>

    </html>

  );

}
