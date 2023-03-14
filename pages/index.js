import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import BodySection from "@/components/BodySection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <BodySection />
    </div>
  );
}
