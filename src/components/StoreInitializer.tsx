"use client";

import { useRef } from "react";
import { useCart } from "@/store/store";
import { newItemToCart } from "@/types/types";

const StoreInitializer = ({ CartItems }: { CartItems: newItemToCart[] }) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    useCart.setState({ products: CartItems });
    initialized.current = true;
  }

  return null;
};

export default StoreInitializer;
