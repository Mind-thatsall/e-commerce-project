import React from "react";
import { Cart } from "./Cart";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>SHOP</li>
        <li>TEST</li>
        <Cart />
      </ul>
    </nav>
  );
};
