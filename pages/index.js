import HeroSection from "@/components/HeroSection";
import VirtualSection from "@/components/VirtualSection";
import GoalSection from "@/components/GoalSection";
import BodySection from "@/components/BodySection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeaderSection from "@/components/HeaderSection";

export default function Home() {
  return (
    <div className="ml-4 mr-4 md:ml-0 md:mr-0">
      <div className="bg-[#EDEDED] md:py-10 w-[410px] h-[540px] md:h-[550px] lg:w-full md:w-full">
        <HeaderSection />
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
      </div>
      <BodySection />
    </div>
  );
}
