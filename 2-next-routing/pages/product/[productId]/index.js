import { useRouter } from "next/router";

function Product() {
  const router = useRouter();
  return <h1>Details about product {router.query.productId}</h1>;
}

export default Product;
