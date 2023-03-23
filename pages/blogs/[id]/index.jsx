import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import Card from "@/components/Card";
import ViewCard from "@/components/ViewCard";
import HeaderSection from "@/components/HeaderSection";
import StudyCard from "@/components/StudyCard";
import CardView from "@/components/CardView";
import ViewCardSecond from "@/components/ViewCardSecond";
import ViewCardThird from "@/components/ViewCardThird";

const Blogs = () => {
  const router = useRouter();
  const [blog, setBlog] = useState();
  console.log(blog);
  useEffect(() => {
    const id = router.query.id;
    async function getBlogsId(id) {
      const blogsdata = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setBlog(await blogsdata.json());
    }
    getBlogsId(id);
  }, [router.query.id, blog]);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="mt-10 py-10 md:py-0">
          <HeaderSection />
        </div>
        <div className="container px-5  mx-auto flex flex-wrap flex-col">
          <h1 className=" md:px-0 text-[#313131] text-[30px] md:text-[30px]  md:w-[680px]  leading:[42px] md:leading-[40px] text-left lg:px-36 font-medium	font-serif font-semibold not-italic">
            {blog?.title}
          </h1>
          <div className="container mx-aut flex flex-wrap flex-col md:flex-row items-cente mb-12 md:mb-0 md:py-4">
            <div className="md:ml-auto md:mr-auto flex flex-wrap w-[946px] text-base sm:text-1x text-1x ">
              <p className="text-[30px] md:text-[20px] mr-1 hover:text-gray-900 ">By Thomas Frank</p>
              <p className="text-[30px] md:text-[20px] mr-1 md:mt-1">
                <GoPrimitiveDot />
              </p>
              <p className="text-[30px]  md:text-[20px] mr-1 hover:text-gray-900">Published : a year ago</p>
              <p className="text-[30px] md:text-[20px] mr-1 md:mt-1">
                <RxDividerVertical />
              </p>
              <p className="text-[30px] md:text-[20px] mr-1 hover:text-gray-900">Update : a year ago</p>
            </div>
          </div>

          <div className="w-[946px] h-[700px] md:h-full block mx-auto  object-cover object-center mb-">
            <StudyCard />
          </div>
          <p className="py-10 md:px-0 mt- w-[946px] block mx-auto text-[30px] md:text-[20px]  object-cover object-center">
            {blog?.body}
          </p>

          <div className="">
            <ViewCard />
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};
export default Blogs;

