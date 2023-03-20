import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import Card from "@/components/Card";
import ViewCard from "@/components/ViewCard";
import HeaderSection from "@/components/HeaderSection";
import StudyCard from "@/components/StudyCard";
import CardView from "@/components/CardView";
import ViewCardSecond from "@/components/ViewCardSecond";
import ViewCardThird from "@/components/ViewCardThird";

const ViewSection = () => {
  const [showMobileMenue, setShowMobileMenue] = useState(true);

  return (
    <div>
      <div className="bg-[#FBFBFB] py-5">
        <HeaderSection />
      </div>
      <div className="min-h-[30px] px-10 py-5"></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap flex-col">
          <h1 className=" mx-auto w-[946px]  title-font sm:text-3xl text-3xl font-medium text-gray-900">
            13 Essential, Science -backed Study Tips
          </h1>
          <div className="container mx-auto flex flex-wrap p- flex-col md:flex-row items-center py-6">
            <div className="md:ml-auto md:mr-auto flex flex-wrap w-[946px] text-base sm:text-1x text-1x ">
              <p className="mr-1 hover:text-gray-900">By Thomas Frank</p>
              <p className="mr-1 mt-1">
                <GoPrimitiveDot />
              </p>
              <p className="mr-1 hover:text-gray-900">Published : a year ago</p>
              <p className="mr-1 mt-1">
                <RxDividerVertical />
              </p>
              <p className="mr-1 hover:text-gray-900">Update : a year ago</p>
            </div>
          </div>

          <div className="w-[946px] h-[750px] block mx-auto  object-cover object-center mb-10">
            <StudyCard />
          </div>
          <p className="mt-20 w-[946px] block mx-auto  object-cover object-center py-10">
            {/* content goes here */}
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-4 mx-auto  object-cover object-center">
            <ViewCard />
            <ViewCardSecond />
            <ViewCardThird />
          </div>
         
        </div>
        <div></div>
      </section>

      {/* <ViewCard /> */}
    </div>
  );
};
export default ViewSection;
