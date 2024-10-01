import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { InfoCards } from "@/src/components/InfoCards";

export default function Home() {
  return (
    <main className="font-urbanist">
      <Header />
      <Hero />
      <InfoCards />
      <section>Properties</section>
      <section>Clients</section>
      <section>Start Banner</section>
      <footer>Footer</footer>
    </main>
  );
}
