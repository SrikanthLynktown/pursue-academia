import React, { useState, useEffect } from "react";
import Card from "./Card";
import CareerPlan from "./CardsComponents/CareerPlan";
import CenturySkills from "./CardsComponents/CenturySkills";
import Education from "./CardsComponents/Education";
import EntranceTest from "./CardsComponents/EntranceTest";
import Explore from "./CardsComponents/Explore";
import Virtual from "./CardsComponents/Virtual";
import Header from "./Header";
import Consider from "./CardsComponents/Consider";

const BodySection = (props) => {
  const [posts, setPost] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");
  const [filteredPosts, setFilteredPost] = useState();



  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data.slice(0, 30)));

  };
  useEffect(() => {
    fetchPost();

  }, []);

  const handleChange = (event) => {
    const filterValue = event.target.value
     fetch(`https://jsonplaceholder.typicode.com/posts/${filterValue}`)
      .then((res) => res.json())
      .then((data) => setFilteredPost(data));

      
    // setSelectedValue(filterValue);

    // if (filterValue === "all") {
    //   setFilteredPost(posts);
    // } else {
    //   const filtered = posts.filter(
    //     (post) => post.userId === parseInt(filterValue)
    //   );
    //   setFilteredPost(filtered);
    // }

  };
  return (
    <div className="md:p-10">
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap md:flex-row items-center space-y-2  flex-col-reverse">
            <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center px-4">
              <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                All
              </a>
              <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                My Interest
              </a>
              <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                Popular
              </a>
              <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                Trending
              </a>
              <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                Recent
              </a>
            </nav>

            <div className="flex ml-6 items-center">
              <div className="relative">
                <select
                  defaultValue={"all"}
                  value={selectedValue}
                  onChange={handleChange}
                  className="rounded-[5px] border border-[#DADADA] appearance-none focus:outline-none  pl-3  w-[110px] h-[40px]"
                >
                  <option value="all">Category</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    className="w-4 h-4 mt-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
        <Consider post={filteredPosts}  data={posts}/>
        {/* <CenturySkills/>
      <CareerPlan/>
      <EntranceTest/>
      <CenturySkills/>      
      <Education/>
      <EntranceTest/>
      <Explore/>
      <Virtual/> */}

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default BodySection;
