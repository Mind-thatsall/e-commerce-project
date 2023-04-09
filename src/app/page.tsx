import { AddToCart } from "@/components/AddToCart";
import { Navbar } from "@/components/Navbar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <AddToCart />
    </main>
  );
}
