import { useCart } from "@/store/store";
import React from "react";

export default function CartPage() {
  const data = useCart.getState().products;
  console.log(data);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
