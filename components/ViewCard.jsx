import React from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { IoMdShareAlt } from 'react-icons/io'
import { GiPlayButton } from 'react-icons/gi'
import Image from 'next/image';
const ViewCard = () => {
    return (
        <>
            <section class="text-gray-600 body-font bg-[#E5E5E5]">
                <div class="container px-5 py-6 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                            <div class="bg-white p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="bg-red-300">
                                    <Image
                                        src="/IMG-20230315-WA0003.jpg"
                                        alt=""
                                        srcSet=""
                                        className="object-cover w-[940px]"
                                        width={400}
                                        height={200}
                                        priority
                                    />
                                </div>
                                <div class="py-6 md:py-0 lg:py-0">
                                    <div className="flex justify-between items-center px-2 mt-6">
                                        <div className="flex gap-4">
                                            <div className="flex gap-2">
                                                <p className="py- mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]">
                                                    <AiFillHeart />
                                                </p>
                                                <p className='text-[30px]  md:text-[16px] '>32</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <p className="mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]"><GiPlayButton /></p>
                                                <p className='text-[30px]  md:text-[16px]'>12</p>
                                            </div>

                                            <div className="flex gap-2">
                                                <p className="mt-2  md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]"><IoMdShareAlt /></p>
                                                <p className='text-[30px]  md:text-[14px]'>Share</p>
                                            </div>
                                        </div>
                                        <div className="text-[30px]  md:text-[16px] w-[200px]  h-[50px] md:w-[94px] md:h-[30px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                                            Read more
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="bg-white p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="bg-red-300">
                                    <Image
                                        src="/IMG-20230315-WA0003.jpg"
                                        alt=""
                                        srcSet=""
                                        className="object-cover w-[940px]"
                                        width={400}
                                        height={200}
                                        priority
                                    />
                                </div>
                                <div class="py-6 md:py-0 lg:py-0">
                                    <div className="flex justify-between items-center px-2 mt-6">
                                        <div className="flex gap-4">
                                            <div className="flex gap-2">
                                                <p className="py- mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]">
                                                    <AiFillHeart />
                                                </p>
                                                <p className='text-[30px]  md:text-[16px] '>32</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <p className="mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]"><GiPlayButton /></p>
                                                <p className='text-[30px]  md:text-[16px]'>12</p>
                                            </div>

                                            <div className="flex gap-2">
                                                <p className="mt-2  md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]"><IoMdShareAlt /></p>
                                                <p className='text-[30px]  md:text-[14px]'>Share</p>
                                            </div>
                                        </div>
                                        <div className="text-[30px]  md:text-[16px] w-[200px]  h-[50px] md:w-[94px] md:h-[30px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                                            Read more
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="bg-white p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="bg-red-300">
                                    <Image
                                        src="/IMG-20230315-WA0003.jpg"
                                        alt=""
                                        srcSet=""
                                        className="object-cover w-[940px]"
                                        width={400}
                                        height={200}
                                        priority
                                    />
                                </div>
                                <div class="py-6 md:py-0 lg:py-0">
                                    <div className="flex justify-between items-center px-2 mt-6">
                                        <div className="flex gap-4">
                                            <div className="flex gap-2">
                                                <p className="py- mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]">
                                                    <AiFillHeart />
                                                </p>
                                                <p className='text-[30px]  md:text-[16px] '>32</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <p className="mt-2 md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]"><GiPlayButton /></p>
                                                <p className='text-[30px]  md:text-[16px]'>12</p>
                                            </div>

                                            <div className="flex gap-2">
                                                <p className="mt-2  md:mt-1 lg:mt-1 text-[30px]  md:text-[16px]"><IoMdShareAlt /></p>
                                                <p className='text-[30px]  md:text-[14px]'>Share</p>
                                            </div>
                                        </div>
                                        <div className="text-[30px]  md:text-[16px] w-[200px]  h-[50px] md:w-[94px] md:h-[30px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                                            Read more
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewCard;