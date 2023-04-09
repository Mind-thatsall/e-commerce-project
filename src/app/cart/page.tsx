"use client";

import { useCart } from "@/store/store";
import React from "react";

export default function CartPage() {
  const { products } = useCart();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
