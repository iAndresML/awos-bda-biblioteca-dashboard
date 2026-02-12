import Link from "next/link";

export default function Page(){

return(

<div>

<h1>Dashboard Biblioteca</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:20
}}>

<Link href="/reports/most-borrowed">
<div style={{border:"1px solid gray",padding:20}}>
Libros más prestados
</div>
</Link>

<Link href="/reports/overdue">
<div style={{border:"1px solid gray",padding:20}}>
Préstamos vencidos
</div>
</Link>

</div>

</div>

)
}
