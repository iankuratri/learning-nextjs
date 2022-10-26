import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handlePlaceOrder = () => {
    console.log("Placing an order...");
    router.push("/product");

    // for replace behaviour
    // router.replace("/product");
  };

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

      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default Home;
