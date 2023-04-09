"use client";

import Link from "next/link";
import { useCart } from "@/store/store";

export const Cart = () => {
  const cartCount = useCart((state) => state.count);

  return <Link href={"/cart"}>CART {cartCount}</Link>;
};
