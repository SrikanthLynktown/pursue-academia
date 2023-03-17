import React from 'react'

const Header = () => {
    return (
        // <div>
        //     <header>
        //         <nav>
        //             <ul className='px-28 py-4 flex space-x-11 justify-end'>
        //                 <li>Home</li>
        //                 <li>Home</li>
        //                 <li>Home</li>
        //                 <li>Home</li>

        //             </ul>
        //         </nav>

        //     </header>
        // </div>


        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center space-y-2 flex flex-col-reverse">

                <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center px-4">
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">All</a>
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">My Interest</a>
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">Popular</a>
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">Trending</a>
                    <a className="hover:bg-[#E5E5E5] rounded-[5px] px-2 py-1 cursor-pointer">Recent</a>

                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Category
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
                <div className="flex ml-6 items-center">
                    <div className="relative">
                        <select className="rounded-[5px] border border-[#DADADA] appearance-none focus:outline-none  pl-3  w-[110px] h-[40px] ">
                            <option>Category</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-4 h-4 mt-1" viewBox="0 0 24 24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </header>

    )
}
export default Header;