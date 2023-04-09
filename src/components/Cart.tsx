"use client";

import Link from "next/link";
import { useCart } from "@/store/store";

export const Cart = () => {
  return <Link href={"/cart"}>CART </Link>;
};
