import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { RxDividerVertical } from 'react-icons/rx'
import Card from '@/components/Card';
import ViewCard from "@/components/ViewCard";
import HeaderSection from "@/components/HeaderSection";
import StudyCard from "@/components/StudyCard";
import CardView from "@/components/CardView";

const ViewSection = () => {
  const [showMobileMenue, setShowMobileMenue] = useState(true);

  return (
    <div>
      <div className="bg-[#FBFBFB] py-5">
        <HeaderSection />
      </div>
      {/* {showMobileMenue && (
        <div className="fixed md:hidden bg-white p-10 left-0 right-0">
          <span
            className="text-4xl cursor-pointer"
            onClick={() => setShowMobileMenue(false)}
          >
            X
          </span>
          <div className="flex flex-col gap-4 mt-8">
            <div className="rounded-[6px] h-[37px] w-full flex justify-center items-center border border-blue-500 text-blue-500">
              Psychometric assessment
            </div>
            <div className="rounded-[6px] h-[37px] w-full flex justify-center items-center border border-blue-500 text-blue-500">
              Virtual internship
            </div>
          </div>
        </div>
      )} */}

      <div className="min-h-[30px] px-10 py-5">
        {/* <nav className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <div className="md:hidden">
              <AiOutlineMenu
                className="text-[3rem] cursor-pointer"
                onClick={() => setShowMobileMenue(true)}
              />
            </div>
            <div className="h-[77px] w-[149px] -mt-[23px]">
              <img src="/logo.png" alt="" srcset="" />
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
        </nav> */}
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
          <h1 className=' mx-auto mb-10 title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900'>13 Essential, Science -backed Study Tips</h1>
          <div class="container mx-auto flex flex-wrap p- flex-col md:flex-row items-center py-4">
            <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center sm:text-1x text-1x ">
              <p class="mr-1 hover:text-gray-900">By Thomas Frank</p>
              <p className='mr-1'><GoPrimitiveDot /></p>
              <p class="mr-1 hover:text-gray-900">Published : a year ago</p>
              <p className='mr-1'><RxDividerVertical /></p>
              <p class="mr-1 hover:text-gray-900">Update : a year ago</p>
            </div>
          </div>

          <div className='w-[946px] h-[750px] block mx-auto  object-cover object-center'>
            <StudyCard  />
          </div>
          {/* <div className="xl:w-5/12  space-y-8 pb-5 rounded-md overflow-hidden block mx-auto mb-10 object-cover object-center">
            <Card />
          </div> */}
          <p className='w-[946px] block mx-auto  object-cover object-center py-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis mollitia
           cum sequi quo ad alias ullam odio molestias in maxime eveniet doloribus amet debitis cumque ea saepe et 
           corporis doloremque hic itaque, asperiores accusamus quos nemo! Omnis laboriosam corrupti cumque. 
           Voluptatibus ipsa reiciendis nobis molestiae laudantium sequi culpa quae corporis sunt, itaque veniam 
           illum impedit, architecto maxime temporibus, quasi delectus aut commodi quos. Tempore tenetur magnam 
           molestiae, eum corporis, laudantium dolorem dolores voluptate maxime libero illum ipsam, culpa soluta 
           cumque a dolore incidunt aspernatur porro velit consequuntur modi voluptas? Optio ad provident exercitationem
            asperiores fuga officia sunt ratione, vel dolorum velit nesciunt ea quaerat eum blanditiis inventore placeat magni vero perferendis facere? Veniam deserunt ipsum praesentium nam perferendis. Magnam numquam eos error architecto nobis. Possimus saepe dolorem consequuntur eligendi, eos necessitatibus. Deleniti nam, accusamus repudiandae eaque cupiditate dignissimos quia earum corporis. Blanditiis laborum, sed asperiores non tempore perspiciatis dolorum debitis, officia error quo fugiat sit tempora veritatis molestiae. Fugiat ipsum ipsa magnam fugit dolorum id doloremque tempore quos, esse est, quasi aut blanditiis maxime mollitia. Quis quae fugiat ipsa, eveniet earum at rerum delectus officiis alias, autem facilis odit deleniti, saepe ab voluptate. Voluptate pariatur doloremque nam mollitia nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi voluptate officiis provident voluptatibus, recusandae atque tempora esse, doloribus veniam harum modi libero explicabo odit quaerat dolorum deleniti ea, nisi labore quam dolorem natus laudantium dolore? Cupiditate, saepe! Sint in totam laborum fugit culpa nam eligendi cum laudantium illum soluta deleniti perferendis vero ipsa officia reprehenderit temporibus, voluptatibus magnam doloremque dolorem qui quas odit aut! Repudiandae eveniet veritatis ea odit minus fugiat voluptatum aspernatur commodi possimus laboriosam magnam, non quia, cum, voluptas in ipsum eos quidem fugit repellendus! Magnam totam voluptas perferendis assumenda sequi, expedita rem magni! Totam, obcaecati ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque consequatur nam, maxime iusto accusantium dignissimos velit. Vitae, doloribus quae error temporibus repudiandae iste vel officia non dicta molestias. Iure blanditiis totam tempora tenetur molestiae similique. Fugiat quidem nostrum, iusto consequatur illo quam eius aliquam veniam, repellendus, dolorum atque numquam nobis iure possimus quibusdam at? Voluptatem laborum maxime exercitationem quis tempora expedita! Rerum consectetur quod harum optio dolor, praesentium rem voluptatem accusantium aliquid reiciendis eius minima, laudantium nobis fugit. In nisi consequatur, quod adipisci eum voluptas nam reprehenderit? Maiores, pariatur. Ad cumque hic explicabo excepturi nam, commodi dignissimos cupiditate ut. lorem100 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, at labore, delectus perferendis quaerat et commodi esse possimus aperiam aliquam eum explicabo, nemo dolor? Vel aperiam minima explicabo qui sequi veniam aliquam, ratione quam aliquid, mollitia nulla libero praesentium illum. Amet dolores quas quia corrupti nulla dicta voluptatem vel quod molestiae quo odit culpa, aliquam omnis ad, laboriosam ut debitis fugit consequuntur rerum esse ducimus. Ex suscipit similique sit mollitia, eveniet voluptates voluptatibus a enim accusantium! Nisi, voluptates consequuntur architecto provident unde deserunt dolor facilis rerum non aut explicabo, blanditiis corporis dignissimos impedit sed ipsam, saepe a aliquid minus harum quibusdam nostrum vero ex! Accusantium alias soluta repudiandae amet architecto, enim velit! Perspiciatis error consequatur, vel debitis fuga qui assumenda sunt non sed saepe! Nostrum, sint ipsa qui facere minima omnis, incidunt saepe officia perferendis necessitatibus ab itaque provident eveniet dolore voluptatibus repellat corrupti enim iste assumenda! Ea, ex qui alias fugiat nam amet! Itaque illum qui cupiditate, officiis, voluptatum velit debitis, nisi dolore eligendi suscipit placeat tenetur explicabo facere rem accusamus iusto optio provident accusantium quae tempora earum nobis? Placeat quisquam soluta aut id saepe, ullam praesentium, quaerat laboriosam adipisci dolores optio alias, dignissimos qui quasi!
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-4 block mx-auto  object-cover object-center">
        {/* <CardView/>
        <CardView/>
        <CardView/> */}
        <ViewCard />
        <ViewCard />
        <ViewCard />
      </div>
        </div>
        <div>
       
        </div>
        
      </section>
      
      {/* <ViewCard /> */}

    </div>
  )
}
export default ViewSection;