import DiscountBanner from "@/components/DiscountBanner";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { getAllCategory, getAllProducts, getSale } from "@/sanity/helpers";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategory();
  const sales = await getSale();

  return (
    <div className="py-10">
      <Container>
        <DiscountBanner sales={sales!} />
        <ProductList products={products} title={true} categories={categories} />
      </Container>
    </div>
  );
}
