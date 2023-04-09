"use client";

import { useCart } from "@/store/store";
import axios from "axios";

export const AddToCart = () => {
  const { addToCart, products } = useCart();
  const newItem = {
    id: 4,
    name: "Best",
    price: 29,
    size: "XL",
  };

  async function handleAddToCart() {
    try {
      await axios.post("http://localhost:3001/products", newItem);
      addToCart(newItem);
      console.log(products);
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  return <div onClick={handleAddToCart}>Add to cart</div>;
};
