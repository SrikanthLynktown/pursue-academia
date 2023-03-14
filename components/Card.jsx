import React from "react";
import { useRouter } from 'next/router'

const Card = () => {
  const router = useRouter();
  return (
    <div className="min-w-[350px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border" onClick={()=>router.push('./viewpage')
    }>
      <div className="w-full h-[200px] bg-red-300">
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
          <div>32</div>
          <div>Share</div>
        </div>

        <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
          Read more
        </div>
      </div>

    </div>
  );
};

export default Card;
