import React from "react";
import {  Product } from "../../sanity.types";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}
const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product: Product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
