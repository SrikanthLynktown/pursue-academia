import HeroSection from "@/components/HeroSection";
import VirtualSection from "@/components/VirtualSection";
import GoalSection from "@/components/GoalSection";
import BodySection from "@/components/BodySection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        useKeyboardArrows
      >
        <HeroSection />
        <VirtualSection />
        <GoalSection />
      </Carousel>
      <BodySection />
    </div>
  );
}
