import { create } from "zustand"

interface Cart {
  count: number;
  addToCart: () => void;
}

export const useCart = create<Cart>(set => ({
  count: 1,
  addToCart: () => set(state => ({ count: state.count + 1 })),
  })
)