type Book={title:string,total:number,rank:number};

async function getData():Promise<Book[]>{
 const r=await fetch("http://localhost:3000/api/books",{cache:"no-store"});
 return r.json();
}

export default async function Home(){
 const data=await getData();

 return(
  <div>
   <h1>Libros más prestados</h1>
   <table border={1} cellPadding={8}>
    <tr><th>Título</th><th>Total</th><th>Rank</th></tr>
    {data.map((r,i)=>(
     <tr key={i}>
      <td>{r.title}</td>
      <td>{r.total}</td>
      <td>{r.rank}</td>
     </tr>
    ))}
   </table>
  </div>
 );
}
