import { AddToCart } from "@/components/AddToCart";
import { Navbar } from "@/components/Navbar";
import { useCart } from "@/store/store";

export default async function Home() {
  console.log(useCart.getState());

  return (
    <main>
      <Navbar />
      <AddToCart />
    </main>
  );
}
