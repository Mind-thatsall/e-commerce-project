import { newItemToCart } from "@/types/types";
import { create } from "zustand"
export interface Cart {
  products: newItemToCart[];
  addToCart?: (params: newItemToCart) => void;
}

export const useCart = create<Cart>(set => ({
  products: [],
  addToCart: (newItem) => {
    set(state => {
      const updateCart = [...state.products, newItem];
      return {
        ...state,
        products: updateCart,
      }
    })

  },
  })
)