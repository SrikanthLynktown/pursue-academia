import React from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { IoMdShareAlt } from 'react-icons/io'
import {GiPlayButton} from 'react-icons/gi'
const StudyCard = () => {
    return (
        <>
            <section className="text-gray-600 body-font bg-[#EDEDED]">
                <div className="container ">
                    <div className="flex flex-wrap">
                        <div className="">
                            <div className=" bg-white bg-opacity-75 rounded-lg overflow-hidden relative ">
                                <div className='bg-red-300 w-[946px] h-[550px]'>
                                    <img src="Helping to Find the Right Career is Priceless.png" alt="" />
                                </div>
                                <div className="px-5 py-5 ">
                                    <h1 className="text-xl font-bold">13 Essential Science Backe...</h1>
                                    <p className="text-lg text-gray-400">by Thomas Frank</p>
                                </div>
                                <div className="flex justify-between items-center px-5 py-5">
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
                    </div>
                </div>
            </section>
        </>
    )
}
export default StudyCard;