import React from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { IoMdShareAlt } from 'react-icons/io'
import { GiPlayButton } from 'react-icons/gi'
import Image from 'next/image';
const ViewCard = () => {
    return (
        <>
            <section className="text-gray-600 body-font bg-[#E5E5E5] md:h-[1550px] lg:h-full">
                <div className="container px-5 py-6 mx-aut  ">
                    <div className="px-2 flex flex-wrap grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4  -m-4">
                        <div className=" md:w-[450px] lg:w-full ">
                            <div className="bg-white p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
                                <div className="py-6 md:py-0 lg:py-0">
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
                        <div className=" md:w-[450px] md:ml-24 lg:ml-0 lg:w-full ">
                            <div className="bg-white p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
                                <div className="py-6 md:py-0 lg:py-0">
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
                        <div className="md:w-[450px] lg:w-full ">
                            <div className="bg-white p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
                                <div className="py-6 md:py-0 lg:py-0">
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