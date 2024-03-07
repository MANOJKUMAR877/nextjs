export default function Review({
    params,
  }: {
    params: { productId: number,reviewId:number };
  }) {
    return <h1>Proucts {params.productId} {params.reviewId}</h1>;
  }
  