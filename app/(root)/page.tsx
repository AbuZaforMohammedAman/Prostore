import ProductList from "@/components/shared/product/product-list";
//import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.action";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  const formattedProducts = latestProducts.map(product => ({
    ...product,
    rating: Number(product.rating)
  }));

  return (
    <>
      <ProductList
        data={formattedProducts}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
}

export default Homepage;