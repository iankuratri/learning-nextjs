import { useRouter } from "next/router";

function ProductReview() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      Review id: {reviewId} of product id: {productId}
    </h1>
  );
}

export default ProductReview;
