import React from "react";
import { useRouter } from 'next/router'
import { AiFillHeart } from 'react-icons/ai'
import {IoMdShareAlt} from 'react-icons/io'
const Card = () => {
  const router = useRouter();
  return (
    <div className="min-w-[350px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer">
      <div className="w-full h-[200px] bg-red-300"  onClick={() => router.push('./viewpage')}>
        <img
          // src="https://unsplash.com/photos/G85VuTpw6jg"
          src="Goal Planning Session.png"
          alt=""
          srcset=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-5">
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
            <p className="py-1"><IoMdShareAlt/></p>
            <p>Share</p>
          </div>
        </div>

        <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
          Read more
        </div>
      </div>

    </div>
  );
};

export default Card;
