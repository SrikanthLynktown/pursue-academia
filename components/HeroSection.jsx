import React, { useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="px-10">
        <section className="text-gray-600 body-font">
          <div className="container  mx-auto flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-center space-y-5">
              <h1 className="text-[#313131] text-[30px] md:text-[48px] w-[345px] md:w-[680px] h-[125px] md:h-[128px] leading:[42px] md:leading-[64px] text-left font-medium	font-serif font-semibold not-italic  max-w-[680px]">
                Helping to Find the Right Career is Priceless
              </h1>
              <p className=" text-[#71717A] text-left text-[15px] md:text-[24px]  w-[345px] md:w-[542px] h-[42px] md:h-[64px] leading-[21px] md:leading-[32px] font-serif font-normal not-italic">
                Our 4 step counseling process help kids to choose the major/career
                with confidence</p>
              <div className="space-y-4">
                <div className="bg-[#3780FF] w-[260px] h-[31px] md:w-[400px] md:h-[48px] rounded-[5px] md:rounded-[8px] flex justify-center items-center cursor-pointer" onClick={() => window.open('https://legislative.gov.in/sites/default/files/dummy-pdf_2_2.pdf')}>
                  <span className=" text-[#FFFFFF] text-[10px] md:text-[16px] w-[98px] h-[16px]   md:w-[155px] md:h-[24px] leading-[16px] md:leading-[24px]  font-serif font-medium not-italic"> Download the fllyer</span>
                </div>
                <div className="relative w-[260px] h-[44px] md:w-[400px] md:h-[51px]">
                  <Image
                    src="/Whatsapp button.png"
                    className="mt-[15.01px]"
                    alt="whatsapp"
                    width={260}
                    height={44}
                    priority
                  />
                  <div className="absolute md:left-[150px] md:top-[12.01px]  top-[.08px]  cursor-pointer mt-[16px]" onClick={() => window.open('https://web.whatsapp.com/')}>
                    <span className="ml-[100px] md:ml-0 text-center text-[10px] md:text-[16px] w-[64px] h-[16px] md:w-[99px] md:h-[24px] md:leading-[24px] leading-[16px] font-medium font-serif text-white">Enquire now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-[168px] -mt-[37px] md-w-full md:-mt-0">
              <Image className=" md:ml-[250px] md:mt-[220px] lg:ml-0 lg:mt-0 object-cover object-center rounded" alt="hero" src="/Helping to Find the Right Career is Priceless.png"
                width={651}
                height={484}
                priority />
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default HeroSection;
