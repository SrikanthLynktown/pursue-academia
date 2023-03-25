import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import ViewCard from "@/components/ViewCard";
import HeaderSection from "@/components/HeaderSection";
import StudyCard from "@/components/StudyCard";
import Image from "next/image";
import ImageSlide from "@/components/CardsComponents/ImageSlider";

const Blogs = () => {
  const router = useRouter();
  const [blog, setBlog] = useState();
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
      <section className="text-gray-600 body-font lg:overflow-x-hidden">
        <div className="lg:ml-5 mt-10 py-10 md:py-0 lg:mb-[40px]">
          <HeaderSection />
        </div>
        <div className="w-[1400px] lg:w-[1000px] lg:mx-auto px-10  ">
          <Image
            src="/IMG-20230315-WA0006.jpg"
            alt=""
            className=""
            width={1436}
            height={718}
            priority
          />
        </div>

        <div className="flex flex-col ">
          <p className=" py-10 px-10 ml-[172p] w-[1400px] lg:w-[1000px] block mx-auto text-[30px] md:text-[20px]  object-cover object-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of LoremPageMaker including versions of
            Lorem Ipsum.
          </p>
          <div className="mt-[80px] ml-[240p] ">
            <iframe
              className="w-[1400px] lg:w-[1000px] h-[700px] px-10 mx-auto"
              width="950"
              height="400"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <p className=" py-10 px-10 ml-[172p] w-[1400px] lg:w-[1000px] block mx-auto text-[30px] md:text-[20px]  object-cover object-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of LoremPageMaker including versions of
            Lorem Ipsum.
          </p>
          <div className="mx-aut ml-[200px]">
            <ImageSlide />
          </div>
          <p className=" py-10 px-10 ml-[172p] w-[1400px] lg:w-[1000px] block mx-auto text-[30px] md:text-[20px]  object-cover object-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of LoremPageMaker including versions of
            Lorem Ipsum.
          </p>
          <h1 className="text-[#000000] font-inter leading-[50.83px] w-[271px] h-[51px] font-bold m-12 text-[42px] ml-[585px]">
            Recent Posts
          </h1>
          <div className="w-[1400px] md:w- ">
            <ViewCard />
          </div>
        </div>
      </section>

      {/* <section className="text-gray-600 body-font">
        <div className="lg:ml-5 mt-10 py-10 md:py-0">
          <HeaderSection />
        </div>
        <div className="container px-5  mx-auto flex flex-wrap flex-col">
          <h1 className="h-[120px] md:h-full lg:h-full md:px-0 text-[#313131] text-[30px] md:text-[30px]  leading:[42px] md:leading-[40px] text-left lg:px-4 font-medium	font-serif font-semibold not-italic">
            {blog?.title}
          </h1>
          <div className="container  flex flex-wrap flex-col md:flex-row items-cente mb-12 md:mb-0 md:py-4">
            <div className="md:ml-auto md:mr-auto flex flex-wrap w-[946px] text-base sm:text-1x text-1x ">
              <p className="text-[30px] md:text-[20px] mr-1 hover:text-gray-900 ">
                By Thomas Frank
              </p>
              <p className="text-[30px] md:text-[20px] mr-1 md:mt-1">
                <GoPrimitiveDot />
              </p>
              <p className="text-[30px]  md:text-[20px] mr-1 hover:text-gray-900">
                Published : a year ago
              </p>
              <p className="text-[30px] md:text-[20px] mr-1 md:mt-1">
                <RxDividerVertical />
              </p>
              <p className="text-[30px] md:text-[20px] mr-1 hover:text-gray-900">
                Update : a year ago
              </p>
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
      </section> */}
    </>
  );
};
export default Blogs;
