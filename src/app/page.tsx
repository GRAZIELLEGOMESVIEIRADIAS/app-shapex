import Hero from "@/components/custom/Hero";
import Features from "@/components/custom/Features";
import Pricing from "@/components/custom/Pricing";
import SocialProof from "@/components/custom/SocialProof";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Pricing />
      <SocialProof />
      <Footer />
    </main>
  );
}
