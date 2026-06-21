import Link from "next/link";
import "./pageination.css";

export default async function Pagination({ searchParams }) {
    let params = await searchParams;
  const page = parseInt(params?.page) || 1;
  const itemsPerPage = 3;

  const response = await fetch(
    "http://localhost:3000/api/products",
    {
      cache: "no-store",
    }
  );

  const products = await response.json();

  const allProducts = Math.ceil(
    products.length / itemsPerPage
  );

  const firstIndex = (page - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;

  const currentProducts = products.slice(
    firstIndex,
    lastIndex
  );

  return (
    <div>
      <ul className="ul">
        {currentProducts.map((product, index) => (
        <li key={index} className="li">
            <span className="productName">{product.name}</span>
             <span className="productPrice">${product.price}</span>
        </li>
        ))}
      </ul>

      <div className="pagination">
        {page > 1 && (
          <Link
            className="pageBtn"
            href={`?page=${page - 1}`}
          >
            Prev
          </Link>
        )}

        <span className="pageNumber">
           {page} of {allProducts}
        </span>

        {page < allProducts && (
          <Link
            className="pageBtn"
            href={`?page=${page + 1}`}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}