import Link from "next/link";
import "./globals.css";

export default function RootLayout({children}:{children:React.ReactNode}){

return(

<html>

<body>

<div style={{
background:"#0b3d91",
padding:20,
color:"white"
}}>

<h2>Biblioteca Virtual</h2>

<nav>

<Link href="/">Dashboard</Link> |

<Link href="/reports/most-borrowed"> Libros</Link> |

<Link href="/reports/overdue"> Vencidos</Link>

</nav>

</div>

<div style={{padding:20}}>
{children}
</div>

</body>

</html>

)
}
