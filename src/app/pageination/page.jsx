import Link from "next/link";

export default async function Pagination({ searchParams }) {

    let Params = await searchParams;
     const page = parseInt(Params?.page) || 1;
    const itemsPerPage = 3;
    
     const response = await fetch("http://localhost:3000/api/products", {
        cache: 'no-store'  
    });
    const products = await response.json();
    
     const firstIndex = (page - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;
    
     const currentProducts = products.slice(firstIndex, lastIndex);

    return (<div>
<ul>

    {currentProducts.map(
        (product , index)=>(
            <li key={index}>
                {product.name}  
                {product.price}
            </li>
        )
    )}
</ul>

<div>
<Link href={`?page=${page+1}`}> Next</Link>

<Link href={`?page=${page-1}`}> Prev</Link>
</div>
    </div>)
}
