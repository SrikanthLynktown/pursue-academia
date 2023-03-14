import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const HeroSection = () => {
  const [showMobileMenue, setShowMobileMenue] = useState(true);

  return (
    <>
      {showMobileMenue && (
        <div className="fixed md:hidden bg-white p-10 left-0 right-0">
          <span
            className="text-4xl cursor-pointer"
            onClick={() => setShowMobileMenue(false)}
          >
            X
          </span>
          <div className="flex flex-col gap-4 mt-8">
            <div className="rounded-[6px] h-[37px] w-full flex justify-center items-center border border-blue-500 text-blue-500">
              Psychometric assessment
            </div>
            <div className="rounded-[6px] h-[37px] w-full flex justify-center items-center border border-blue-500 text-blue-500">
              Virtual internship
            </div>
          </div>
        </div>
      )}

      <div className="min-h-[636px] px-10 bg-[#EDEDED] py-10 ">
        <nav className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <div className="md:hidden">
              <AiOutlineMenu
                className="text-[3rem] cursor-pointer"
                onClick={() => setShowMobileMenue(true)}
              />
            </div>
            <div className="h-[77px] w-[149px] -mt-[23px]">
              <img src="/logo.png" alt="" srcset="" />
            </div>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="rounded-[6px] h-[37px] w-[258px] flex justify-center items-center border border-blue-500 text-blue-500 cursor-pointer">
              Psychometric assessment
            </div>
            <div className="rounded-[6px] h-[37px] w-[258px] flex justify-center items-center border border-blue-500 text-blue-500 cursor-pointer">
              <a href="https://www.youtube.com/">Virtual internship
              </a>
            </div>
          </div>
        </nav>
        {/* <div className="flex">
          <div className="space-y-5">

            <h1 className="text-[48px] text-[#313131] font-semibold max-w-[680px]">
              Helping to Find the Right Career is Priceless
            </h1>

            <p className="text-[24px] text-[#71717A] max-w-[542px]">
              Our 4 step counseling process help kids to choose the major/career
              with confidence
            </p>

            <div className="space-y-4">
              <div className="bg-[#3780FF] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center">
                Download the fllyer
              </div>
              <div className="bg-[#31B946] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center">
                Enquire now
              </div>
            </div>
          </div>
          <div >
            <img src="Helping to Find the Right Career is Priceless.png" alt="" />
          </div>
        </div> */}


        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-5">
              <h1 className="text-[44px] text-[#313131] font-semibold max-w-[680px]">
                Helping to Find the Right Career is Priceless
              </h1>
              <p class=" text-[20px] text-[#71717A] max-w-[542px]">Our 4 step counseling process help kids to choose the major/career
                with confidence</p>
              <div className="space-y-4">
                <div className="bg-[#3780FF] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center cursor-pointer" onClick={()=>window.open('https://legislative.gov.in/sites/default/files/dummy-pdf_2_2.pdf')}>
                  Download the fllyer
                </div>
                {/* <div className="bg-[#31B946] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center cursor-pointer">
                  Enquire now
                </div> */}
                <div className="relative ">
                  <Image
                    src="/Whatsapp button.png"
                    className="mt-[15.01px]"
                    alt="whatsapp"
                    width={401}
                    height={68}
                    priority
                  />
                  <div className="absolute text-base w-[99px] h-[24px] left-[150px] 
              top-[12.01px] font-medium normal leading-6 ml-[23px]">
                    <h4 className="poppins text-white">Enquire now</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="Helping to Find the Right Career is Priceless.png" />
            </div>
          </div>
        </section>
      </div>


    </>
  );
};

export default HeroSection;
