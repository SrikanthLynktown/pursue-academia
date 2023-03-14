import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from 'react-icons/rx'
import Card from '@/components/Card';
import ViewCard from "@/components/ViewCard";

const ViewSection = () => {
    const [showMobileMenue, setShowMobileMenue] = useState(true);

    return (
        <div>
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

            <div className="min-h-[30px] px-10 bg-[#EDEDED] py-5">
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
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
                    <h1 className=' mx-auto mb-10 title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900 '>13 Essential, Science -backed Study Tips</h1>
                    <div class="container mx-auto flex flex-wrap p- flex-col md:flex-row items-center py-4">
                        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:text-1x text-1x">
                            <p class="mr-1 hover:text-gray-900">By Thomas Frank</p>
                            <p className='mr-1'><GoPrimitiveDot /></p>
                            <p class="mr-1 hover:text-gray-900">Published : a year ago</p>
                            <p className='mr-1'><RxDividerVertical /></p>
                            <p class="mr-1 hover:text-gray-900">Update : a year ago</p>
                        </div>
                    </div>

                    <div className="xl:w-5/12  space-y-8 pb-5 rounded-md overflow-hidden block mx-auto mb-10 object-cover object-center">
                    <Card/>
                    </div>
                    <p className='xl:w-5/12 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, at labore, delectus perferendis quaerat et commodi esse possimus aperiam aliquam eum explicabo, nemo dolor? Vel nam earum eligendi aperiam minima explicabo qui sequi veniam aliquam, ratione quam aliquid, mollitia nulla libero praesentium illum. Amet dolores quas quia corrupti nulla dicta voluptatem vel quod molestiae quo odit culpa, aliquam omnis ad, laboriosam ut debitis fugit consequuntur rerum esse ducimus. Ex suscipit similique sit mollitia, eveniet voluptates voluptatibus a enim accusantium! Nisi, voluptates consequuntur architecto provident unde deserunt dolor facilis rerum non aut explicabo, blanditiis corporis dignissimos impedit sed ipsam, saepe a aliquid minus harum quibusdam nostrum vero ex! Accusantium alias soluta repudiandae amet architecto, enim velit! Perspiciatis error consequatur, vel debitis fuga qui assumenda sunt non sed saepe! Nostrum, sint ipsa qui facere minima omnis, incidunt saepe officia perferendis necessitatibus ab itaque provident eveniet dolore voluptatibus repellat corrupti enim iste assumenda! Ea, ex qui alias fugiat nam amet! Itaque illum qui cupiditate, officiis, voluptatum velit debitis, nisi dolore eligendi suscipit placeat tenetur explicabo facere rem accusamus iusto optio provident accusantium quae tempora earum nobis? Placeat quisquam soluta aut id saepe, ullam praesentium, quaerat laboriosam adipisci dolores optio alias, dignissimos qui quasi!</p>
                </div>
                <ViewCard/>
            </section>
        </div>
    )
}
export default ViewSection;