import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Home;
