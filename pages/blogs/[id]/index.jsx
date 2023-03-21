import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { useRouter } from "next/router";
const Blogs = () => {
    const router = useRouter();
    const [blog, setBlog] = useState();
    console.log('blog', blog);
    useEffect(() => {
        const id = router.query.id;
        async function getBlogsId(id) {
            const blogsdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setBlog(await blogsdata.json());
        }
        getBlogsId(id)
    }, [router.query.id, blog])
    return (
        <>
            <div className=" w-[400px] h-[396px] shadow-md space-y-8 pb-5 rounded-md overflow-hidden hover:border border-[#4F597B] cursor-pointer mx-auto mt-10">
                <div className="bg-red-300">
                    <Image
                        src="/IMG-20230315-WA0003.jpg"
                        alt=""
                        srcSet=""
                        className="object-cover"
                        width={400}
                        height={200}
                        priority
                    />
                </div>
                <div className="px-5">
                    <h1 className="text-lg font-bold">{blog?.title}</h1>
                    <p className="text-lg text-gray-400">by {blog?.id}</p>
                </div>
                <div className="flex justify-between items-center px-5">
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <p className="py-1">
                                <AiFillHeart />
                            </p>
                            <p>32</p>
                        </div>

                        <div className="flex gap-2">
                            <p className="py-1">
                                <IoMdShareAlt />
                            </p>
                            <p>Share</p>
                        </div>
                    </div>

                    <div className="w-[94px] h-[37px] flex justify-center items-center rounded-[5px] border border-[#DADADA] cursor-pointer">
                        Read more
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blogs;






// import { useRouter } from "next/router";
// import Link from "next/link";
// import useSWR from 'swr'

// const fetchBlogs = (...blogdata) => fetch(...blogdata).then(res => res.json())
// const Blogs = () => {
//     const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetchBlogs)
//     console.log('data', data);
//     if (error) {
//         return <h1>Error</h1>;
//     }

//     if (!data) return <h1>Loading</h1>

//     return (
//         <>
//             <div>
//                 {data &&
//                     data.map((blogData) => {
//                         <Link href={`/blogs/${blogData.id}`} key={blogData.id}>
//                             <div>{data.title}</div>
//                         </Link>
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// export default Blogs;