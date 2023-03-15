import React, { useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="min-h-[536px] px-10 bg-[#EDEDED]">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-5">
              <h1 className="text-[44px] text-[#313131] text-left font-medium	 max-w-[680px]">
                Helping to Find the Right Career is Priceless
              </h1>
              <p className=" text-[20px] text-[#71717A] max-w-[542px]">Our 4 step counseling process help kids to choose the major/career
                with confidence</p>
              <div className="space-y-4">
                <div className="bg-[#3780FF] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center cursor-pointer" onClick={() => window.open('https://legislative.gov.in/sites/default/files/dummy-pdf_2_2.pdf')}>
                  Download the fllyer
                </div>
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
                       top-[12.01px] font-medium normal leading-6 ml-[23px] cursor-pointer mt-[16px]" onClick={() => window.open('https://web.whatsapp.com/')}>
                    <h4 className="poppins text-white">Enquire now</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="Helping to Find the Right Career is Priceless.png" />
            </div>
          </div>
        </section>
      </div>


    </>
  );
};

export default HeroSection;
