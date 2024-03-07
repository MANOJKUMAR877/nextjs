export default function ProductDetails({
  params,
}: {
  params: { productId: number };
}) {
  return <h1>Proucts {params.productId}</h1>;
}
