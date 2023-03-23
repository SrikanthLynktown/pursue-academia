import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
const HeaderSection = () => {
    const [showMobileMenue, setShowMobileMenue] = useState(false);

    return (
        <>
            <div className="px-4">
                {showMobileMenue && (
                    <div className="w-[390p] h-[180px] fixed md:hidden bg-white pt-6 left-0 right-0 top-0 opacity-100 z-[100]">
                        <span 
                            className="text-xl cursor-pointer ml-6 w-[26px] h-[2px] text-[#333333]"
                            onClick={() => setShowMobileMenue(false)}
                        >
                            X
                        </span>
                        <div className="flex flex-col gap-4  justify-center items-center">
                            <div className="flex gap-6">
                                <p className="text-gray-400 py-1 ">01</p>
                                <p className="rounded-[6px] h-[37px] w-[265px] flex justify-center items-center border border-blue-500 text-blue-500">
                                    Psychometric assessment
                                </p>
                            </div>
                            <div className="flex gap-6">
                                <p className="text-gray-400 py-1">02</p>
                                <p className="rounded-[6px] h-[37px] w-[265px] flex justify-center items-center border border-blue-500 text-blue-500">
                                    Virtual internship
                                </p>
                            </div>

                        </div>
                    </div>
                )}
                {/* <div className="min-h-[636px] px-10 bg-[#EDEDED] py-10 "> */}
                <nav className="flex justify-between items-start">
                    <div className="flex gap- items-center">
                        <div className="md:hidden">
                            <AiOutlineMenu
                                className="text-[3rem] cursor-pointer"
                                onClick={() => setShowMobileMenue(true)}
                            />
                        </div>
                        <div className="md:h-[77px] md:w-[149px] md:-mt-[23px]">
                            <Image src="/logo.png" alt="" srcSet="" width={149} height={77} priority />
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

            {/* </div> */}

        </>
    )
}
export default HeaderSection;