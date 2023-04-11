"use client";

import { useCart } from "@/store/store";
import axios from "axios";

export const AddToCart = () => {
  const { addToCart } = useCart();
  const newItem = {
    id: 6,
    name: "Test",
    price: 29,
    size: "XL",
  };

  async function handleAddToCart() {
    axios
      .post("http://localhost:3001/cart", newItem)
      .then(() => {
        addToCart(newItem);
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }

  return (
    <>
      <div onClick={handleAddToCart} className="text-white">
        Add to cart
      </div>
    </>
  );
};
