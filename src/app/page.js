import CountUpSection from "@/components/CountUpSection";
import HeroSlider from "@/components/HeroSlider";
import RecentMovies from "@/components/RecentMovies";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <CountUpSection />
      <RecentMovies/>
    </div>
  );
}
