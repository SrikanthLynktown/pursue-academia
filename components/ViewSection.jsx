import React from 'react';
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from 'react-icons/rx'
import Card from './Card';

const ViewSection = () => {

    return (
        <div>
            <div className="min-h-[30px] px-10 bg-[#EDEDED] py-5">
                <div className="flex justify-between items-start">
                    <div className="flex gap-3 items-center">
                        <div className="md:hidden">
                        </div>
                        <div className="h-[77px] w-[149px] -mt-[23px]">
                            <img src="/logo.png" alt="" srcSet="" />
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
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
                    <h1 className=' mx-auto  title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900 '>13 Essential, Science -backed Study Tips</h1>
                    <div class="container mx-auto flex flex-wrap p- flex-col md:flex-row items-center py-4">
                        <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:text-1x text-1x">
                            <p class="mr-1 hover:text-gray-900">By Thomas Frank</p>
                            <p className='mr-1'><GoPrimitiveDot /></p>
                            <p class="mr-1 hover:text-gray-900">Published : a year ago</p>
                            <p className='mr-1'><RxDividerVertical /></p>
                            <p class="mr-1 hover:text-gray-900">Update : a year ago</p>
                        </div>
                    </div>

                    <div className="space-y-8 pb-5 rounded-md overflow-hidden block mx-auto mb-10 object-cover object-center">
                    <Card/> 
                    </div>
                    <p className='xl:w-5/12 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, at labore, delectus perferendis quaerat et commodi esse possimus aperiam aliquam eum explicabo, nemo dolor? Vel nam earum eligendi aperiam minima explicabo qui sequi veniam aliquam, ratione quam aliquid, mollitia nulla libero praesentium illum. Amet dolores quas quia corrupti nulla dicta voluptatem vel quod molestiae quo odit culpa, aliquam omnis ad, laboriosam ut debitis fugit consequuntur rerum esse ducimus. Ex suscipit similique sit mollitia, eveniet voluptates voluptatibus a enim accusantium! Nisi, voluptates consequuntur architecto provident unde deserunt dolor facilis rerum non aut explicabo, blanditiis corporis dignissimos impedit sed ipsam, saepe a aliquid minus harum quibusdam nostrum vero ex! Accusantium alias soluta repudiandae amet architecto, enim velit! Perspiciatis error consequatur, vel debitis fuga qui assumenda sunt non sed saepe! Nostrum, sint ipsa qui facere minima omnis, incidunt saepe officia perferendis necessitatibus ab itaque provident eveniet dolore voluptatibus repellat corrupti enim iste assumenda! Ea, ex qui alias fugiat nam amet! Itaque illum qui cupiditate, officiis, voluptatum velit debitis, nisi dolore eligendi suscipit placeat tenetur explicabo facere rem accusamus iusto optio provident accusantium quae tempora earum nobis? Placeat quisquam soluta aut id saepe, ullam praesentium, quaerat laboriosam adipisci dolores optio alias, dignissimos qui quasi!</p>

                </div>
            </section>
        </div>
    )
}
export default ViewSection;