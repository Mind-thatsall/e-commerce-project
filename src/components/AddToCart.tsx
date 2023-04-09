"use client";

import { useCart } from "@/store/store";

export const AddToCart = () => {
  const cartCount = useCart((state) => state.addToCart);

  return <div onClick={cartCount}>Add to cart</div>;
};
