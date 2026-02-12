import Link from "next/link";

export default function Page() {

  return (

    <div>

      <h1>Dashboard de Biblioteca</h1>

      <p>
        Este dashboard permite analizar préstamos, multas,
        actividad de usuarios e inventario.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        marginTop: 20
      }}>

        <Card
          title="Libros más prestados"
          link="/reports/most-borrowed"
        />

        <Card
          title="Préstamos vencidos"
          link="/reports/overdue"
        />

        <Card
          title="Resumen de multas"
          link="/reports/fines"
        />

        <Card
          title="Actividad de usuarios"
          link="/reports/members"
        />

        <Card
          title="Estado del inventario"
          link="/reports/inventory"
        />

      </div>

    </div>

  );

}

function Card({
  title,
  link
}: {
  title: string;
  link: string;
}) {

  return (

    <Link href={link}>

      <div style={{
        border: "1px solid gray",
        padding: 20,
        borderRadius: 10,
        cursor: "pointer"
      }}>

        <h3>{title}</h3>

      </div>

    </Link>

  );

}
