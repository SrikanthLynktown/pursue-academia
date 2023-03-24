import React, { useState, useEffect } from "react";
import Consider from "./CardsComponents/Consider";

const BodySection = (props) => {
  const [posts, setPost] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");
  const [filteredPosts, setFilteredPost] = useState([]);

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data.slice(0, 30)));
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const handleChange = (event) => {
    const filterValue = event.target.value;
    setSelectedValue(filterValue);

    if (filterValue === "all") {
      setFilteredPost(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.userId === parseInt(filterValue)
      );
      setFilteredPost(filtered);
    }
  };
  return (
    <div className="md:p-10">
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-aut flex flex-wra md:flex-row   ">
            <div className="md:ml-auto w-ful flex px-4">
              <div className="flex w-[220px] md:w-full md:py-4 mt-6 md:mt-0 overflow-x-auto overflow-y-hidden">
                <div>
                  <a className="hover:bg-[#E5E5E5] rounded-[2px] md:rounded-[5px] px-2 py-1 cursor-pointer">
                    All
                  </a>
                </div>
                <div>
                  <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer md:visible invisible ">
                    My Interest
                  </a>
                </div>
                <div className="flex -ml-14 md:-ml-0">
                  <div >
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                      Popular
                    </a>
                  </div>
                  <div>
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                      Trending
                    </a>
                  </div>
                  <div>
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">
                      Recent
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex ml-16 md:ml-6 items-center">
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
          </div>
        </header>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
        <Consider data={filteredPosts} posts={posts} />
      </div>
    </div>
  );
};

export default BodySection;
