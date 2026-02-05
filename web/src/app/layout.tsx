import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "Arial", margin: 0 }}>
        <header style={{ background: "#1e293b", color: "white", padding: 15 }}>
          <h2>Dashboard Biblioteca</h2>

          <nav style={{ marginTop: 10 }}>
            <Link href="/" style={{ color: "white", marginRight: 10 }}>
              Libros
            </Link>

            <Link href="/overdue" style={{ color: "white", marginRight: 10 }}>
              Vencidos
            </Link>

            <Link href="/fines" style={{ color: "white", marginRight: 10 }}>
              Multas
            </Link>

            <Link href="/members" style={{ color: "white", marginRight: 10 }}>
              Usuarios
            </Link>

            <Link href="/inventory" style={{ color: "white" }}>
              Inventario
            </Link>
          </nav>
        </header>

        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  );
}
