import React from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { IoMdShareAlt } from 'react-icons/io'
import {GiPlayButton} from 'react-icons/gi'
const ViewCard = () => {
    return (
        <>
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-4 mx-auto ">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4">
                            <div className="h-full bg-white bg-opacity-75 px-2 pt-4 pb-4 rounded-lg overflow-hidden relative ">
                                <div className='bg-red-300 min-w-[350px]'>
                                    <img src="Goal Planning Session.png" alt="" />
                                </div>
                                <div className="px-5 py-5 ">
                                    <h1 className="text-xl font-bold">13 Essential Science Backe...</h1>
                                    <p className="text-lg text-gray-400">by Thomas Frank</p>
                                </div>
                                <div className="flex justify-between items-center px-5">
                                    <div className="flex gap-4">
                                        <div className="flex gap-2">
                                            <p className="py-1"><AiFillHeart /></p>
                                            <p >32</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="py-1"><GiPlayButton /></p>
                                            <p>12</p>
                                        </div>

                                        <div className="flex gap-2">
                                            <p className="py-1"><IoMdShareAlt /></p>
                                            <p>Share</p>
                                        </div>
                                    </div>

                                    <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                                        Read more
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-white bg-opacity-75 px-2 pt-4 pb-4 rounded-lg overflow-hidden relative">
                                <div className='bg-red-300 min-w-[350px]'>
                                    <img src="Goal Planning Session.png" alt="" />
                                </div>
                                <div className="px-5 py-5">
                                    <h1 className="text-xl font-bold">13 Essential Science Backe...</h1>
                                    <p className="text-lg text-gray-400">by Thomas Frank</p>
                                </div>
                                <div className="flex justify-between items-center px-5">
                                    <div className="flex gap-4">
                                        <div className="flex gap-2">
                                            <p className="py-1"><AiFillHeart /></p>
                                            <p >32</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="py-1"><GiPlayButton /></p>
                                            <p>12</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="py-1"><IoMdShareAlt /></p>
                                            <p>Share</p>
                                        </div>
                                    </div>

                                    <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                                        Read more
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-white bg-opacity-75 px-2 pt-4 pb-4 rounded-lg overflow-hidden relative">
                                <div className='bg-red-300 min-w-[350px]'>
                                    <img src="Goal Planning Session.png" alt="" />
                                </div>
                                <div className="px-5 py-5">
                                    <h1 className="text-xl font-bold">13 Essential Science Backe...</h1>
                                    <p className="text-lg text-gray-400">by Thomas Frank</p>
                                </div>
                                <div className="flex justify-between items-center px-5">
                                    <div className="flex gap-4">
                                        <div className="flex gap-2">
                                            <p className="py-1"><AiFillHeart /></p>
                                            <p >32</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="py-1"><GiPlayButton /></p>
                                            <p>12</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="py-1"><IoMdShareAlt /></p>
                                            <p>Share</p>
                                        </div>
                                    </div>

                                    <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] border-t-4  cursor-pointer">
                                        Read more
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewCard;