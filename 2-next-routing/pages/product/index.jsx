import Link from "next/link";

function ProductList() {
  return (
    <div>
      <h1>Product List Page</h1>
      <ul>
        <li>
          <Link href="/product/1">
            <a>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href="/product/2">
            <a>Product 2</a>
          </Link>
        </li>
        <li>
          <Link href="/product/3" replace>
            <a>Product 3</a>
          </Link>
        </li>
      </ul>

      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </div>
  );
}

export default ProductList;
