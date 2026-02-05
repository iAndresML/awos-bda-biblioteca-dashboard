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
            <a href="/" style={{ color: "white", marginRight: 10 }}>Libros</a>
            <a href="/overdue" style={{ color: "white", marginRight: 10 }}>Vencidos</a>
            <a href="/fines" style={{ color: "white", marginRight: 10 }}>Multas</a>
            <a href="/members" style={{ color: "white", marginRight: 10 }}>Usuarios</a>
            <a href="/inventory" style={{ color: "white" }}>Inventario</a>
          </nav>
        </header>

        <main style={{ padding: 20 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
