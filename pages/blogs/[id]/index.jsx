import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import ViewCard from "@/components/ViewCard";
import HeaderSection from "@/components/HeaderSection";
import StudyCard from "@/components/StudyCard";

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
        <div className="lg:ml-5 mt-10 py-10 md:py-0">
          <HeaderSection />
        </div>
        <div className="container px-5  mx-auto flex flex-wrap flex-col">
          <h1 className="h-[120px] md:h-full lg:h-full md:px-0 text-[#313131] text-[30px] md:text-[30px]  leading:[42px] md:leading-[40px] text-left lg:px-4 font-medium	font-serif font-semibold not-italic">
            {blog?.title}
          </h1>
          <div className="container  flex flex-wrap flex-col md:flex-row items-cente mb-12 md:mb-0 md:py-4">
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

