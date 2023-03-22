import HeroSection from "@/components/HeroSection";
import VirtualSection from "@/components/VirtualSection";
import GoalSection from "@/components/GoalSection";
import BodySection from "@/components/BodySection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeaderSection from "@/components/HeaderSection";

export default function Home() {
  return (
    <div>
      <div className="bg-[#EDEDED] py-10 w-[410px] lg:w-full md:w-full">
        <HeaderSection />
      

      <HeroSection />
</div>
      {/* <Carousel
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
      </Carousel> */}

      <BodySection />
    </div>
  );
}
