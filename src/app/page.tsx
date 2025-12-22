import Hero from "../components/hero";
import Header from "../components/header";
import Features from "../components/features";
import CallToAction from "@/components/cta";
import Footer from "@/components/footer";
import Copy from "@/components/copy";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
      <Copy />
    </div>
  );
}
