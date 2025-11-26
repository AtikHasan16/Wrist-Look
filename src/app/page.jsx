import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Trending from "@/components/Trending";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      <Hero />
      <Features />
      <Trending />
      <Stats />
    </div>
  );
}
