"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../sanity.types";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import QuantityButtons from "./QuantityButtons";
import PriceFormatter from "./PriceFormatter";
import useCartStore from "../../store";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: "string";
}
const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  // Use useEffect to set isClient to true after component mounts
  // This ensures that the component only renders on the client-side
  // Preventing hydration errors due to server/client mismatch

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div className="h-12">
      {itemCount ? (
        <div className="text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {
            addItem(product);
            toast.success(
              `${product?.name?.substring(0, 12)}... added successfully!`
            );
          }}
          disabled={isOutOfStock}
          className={cn(
            "bg-lightPurple/10 border text-black border-lightPurple w-full py-2 mt-2 rounded-md font-medium hover:bg-lightPurple hover:text-white hoverEffect disabled:hover:cursor-not-allowed disabled:hover:bg-lightPurple/10 disabled:text-gray-400 disabled:hover:text-gray-400 disabled:border-lightPurple/10",
            className
          )}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;