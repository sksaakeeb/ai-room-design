import Header from "@/app/components/Header";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <h1>
        <Header />
        <HeroSection />
      </h1>
    </div>
  );
}
