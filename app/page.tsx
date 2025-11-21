"use client";
import { useRouter } from "next/navigation";
import Dishes from "./components/dishes";
import Menu from "./components/menu";
import Header from "./components/header";
import Table from "./components/booktable";
import Feature from "./components/feature";
import Chef from "./components/chef";
import News from "./components/news";
import Offer from"./components/offer";
import Footer from"./components/footer";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header/>
      <div className=" dark:bg-[#262525] rounded-3xl text-white  font-semibold  "></div>
        <Table />
        
        <div className=" dark:text-white text-black  md:text-[40px] hidden font-light font-[Marcellus] md:flex justify-center text-[150px] ">
          Our Popular category
        </div>
        <div className=" dark:bg-[#262525] md:flex flex-col md:flex-row mt-10 items-center  justify-center gap-10 px-6 hidden ">
          <div className=" ml-120 rounded-2xl  ">
            <Dishes
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PXy_TtSd9kmPX_NdSRlHEeE_S87SNVgelg&s"
              title="Salmon fry"
            />
          </div>
          <Dishes
            image="https://th.bing.com/th/id/OIP.nXkCETTj2alUw0o_s96yWgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            title="Cheesecake"
          />
          <Dishes
            image="https://th.bing.com/th/id/OIP.P9uBQAXWmfLDKRdW8BmzCwHaE8?w=228&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            title="Hot Chocolate"
          />
          <Dishes
            image="https://th.bing.com/th/id/OIP.485PTWFcHpqfzFl9mN27xQHaGi?w=208&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            title="  Chicken Afredo"
          />
    
      </div>
        <div className="bg-white mt-550 w-430 block md:hidden ">
        <div className=" dark:text-white text-black md:text-[40px] font-light font-[Marcellus] flex justify-center text-[150px] ">
          Our Popular category
        </div>
        <div className=" dark:bg-[#262525] flex flex-col md:flex-row mt-10 items-center  justify-center gap-10 px-6 ">
          <div className="  rounded-2xl">
            <Dishes
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PXy_TtSd9kmPX_NdSRlHEeE_S87SNVgelg&s"
              title="Salmon fry"
            />
          </div>
          <Dishes
            image="https://th.bing.com/th/id/OIP.nXkCETTj2alUw0o_s96yWgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            title="Cheesecake"
          />
          <Dishes
            image="https://th.bing.com/th/id/OIP.P9uBQAXWmfLDKRdW8BmzCwHaE8?w=228&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            title="Hot Chocolate"
          />
          <Dishes
            image="https://th.bing.com/th/id/OIP.485PTWFcHpqfzFl9mN27xQHaGi?w=208&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            title="  Chicken Afredo"
          />
        </div>
      </div>



      <div className="flex md:flex-row mt-20 flex-col dark:bg-[#262525]">
        <Feature
          image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
          title=" Quality Foods"
        />
        <Feature
          image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"
          title="  Fast Delivery"
        />
        <Feature
          image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75"
          title=" Delicious Recipes"
        />
      </div>

<Offer/>
      <div className=" flex flex-col justify-center items-center gap-5 ">
        <div className="text-yellow-800  hidden md:block dark:text-white text-[40px] font-bold  ">
          Food Menu
        </div>
        <div className="block md:hidden text-yellow-800 text-[110px] font-bold  justify-center ml-280">  Food Menu</div>
        <div className="  text-[120px] text-center font-bold md:text-5xl md:ml-1 ml-280 ">Our Specials Menu</div>

        <div className="flex md:flex-row flex-col md:text-2xl md:ml-1 ml-250 gap-15 md:p-4 border-black border-2 dark:border-white p-40 gap-y-40 text-[100px]">
          <button
            onClick={() => router.push("/")}
            className=" text-gray-700 p-8 dark:text-white hover:text-white hover:bg-[#826A45] rounded-2xl  cursor-pointer"
          >
            Main dishes
          </button>
          <button
            onClick={() => router.push("/")}
            className="text-gray-700 p-6 dark:text-white hover:text-white hover:bg-[#826A45] rounded-2xl  cursor-pointer"
          >
            Deserts
          </button>
          <button
            onClick={() => router.push("/")}
            className="hover:bg-[#826A45] dark:text-white hover:text-white text-gray-700 p-5 rounded-2xl cursor-pointer"
          >
            Sea Food
          </button>

          <button
            onClick={() => router.push("/")}
            className="hover:bg-[#826A45] dark:text-white hover:text-white text-gray-700 p-5 rounded-2xl cursor-pointer"
          >
            Beverage
          </button>
        </div>
        
       
      </div>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col">
          <Menu
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75"
            name=" Braised Chicken Legs"
            price="34.00"
          />
          <Menu
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75"
            name=" Bone Steak"
            price="18.00"
          />
          <Menu
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75"
            name=" Bone Steak"
            price="12.00"
          />
        
        </div>
        <div className="flex md:flex-row flex-col">
          <Menu
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75"
            name="  Broken Lasagna & Parmesan"
            price="22.00"
          />
          <Menu
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75"
            name="  Broken Lasagna & Parmesan"
            price="34.00"
          />
          <Menu
            image="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75"
            name=" Double-Stack Mushroom"
            price="36.00"
          />
        </div>
      </div>

      <div className="bg-gray-900 m-20  p-30 md:w-340 md:h-200 w-400 h-970 rounded-2xl">
        <div className="flex md:flex-row flex-col justify-between  ">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
           
            className="md:w-100 w-300 h-400 md:h-120 m-5"
          />
          <div className="flex flex-col">
            <div className=" md:font-medium text-white font-bold md:text-[50px] text-[150px]  font-stretch-extra-expanded mt-30 ">
              Are you Ready to Start your online Order?
            </div>
            <div className="  mt-10 text-gray-300 gap-5 md:text-[18px] text-[64px]">
              Bndulgence diminution so discovered mr apartments. Are off under
              folly death wrote cause her way spite. Plan upon yet way get cold
              spot its week. Almost do am or limits hearts. Resolve parties but
              why she shewing. She sang know now
            </div>
            <div className="flex md:flex-row gap-5 flex-col">
              <button className=" md:text-lg border text-[80px] rounded-full bg-white text-black px-15 p-5  hover:bg-black hover:text-white transition  mt-10 ">
                App Store
              </button>
              <button className=" md:text-lg border text-[80px] rounded-full dark:text-white bg-[#826A45] text-black px-15 p-3   hover:bg-white  mt-10 ">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray-200 text-[150px] ml-18 font-serif dark:text-gray-600  ">
          RESTAN
          <iframe
            src="https://www.youtube.com/embed/F3zw1Gvn4Mk"
            className="rounded-2xl mr-300 mt-[-10px] md:h-130 md:w-200 h-480 w-400"
          ></iframe>
        </div>
        <div className="text-center md:w-170 bg-white md:p-15  p-25 shadow-2xl font-serif dark:bg-gray-900 md:ml-180  position absolute md:top-1300 w-420  md:h-auto h-500 ">
          <div className="flex md:justify-items-center font-sans font-semibold ml-10 mt-10 md:text-[29px] text-[120px]">
            Opening Hours
          </div>

          <div className="md:text-[16px] text-[55px] text-[#262525] md:p-5 p-10  font-normal dark:text-white justify md:items-center md:mr-21 mr-55 md:ml-9 mt-2 md:mb-2">
            A relaxing and pleasant atmosphere, good jazz, dinner, and
            cocktails. The Patio Time Bar opens in the center..
          </div>
          <div className="text-[16px] mr-30  font-semibold font-serif hidden md:block ">
            <p>Sunday to Tuesday: ----------- 10:00 - 09:00</p>
            <p>Wednesday to Thursday: ----------- 11:30 - 10:30</p>
            <p>Friday & Saturday:: ----------- 10:30 - 12:00</p>
          </div>
          <div className="text-[55px] mr-190 space-y-11 mt-25  font-serif md:hidden  font-semibold ">
            <p>Sunday to Tuesday: <br/>10:00 - 09:00</p>
            <p>Wednesday to Thursday: <br/> 11:30 - 10:30</p>
            <p>Friday & Saturday:: <br/> 10:30 - 12:00</p>
          </div>
          <div className="flex flex-row mt-10  ">
            <img
              className="ml-15 md:h-15 md:w-15 border-8 h-60  md:mt-1 mt-30  border-[#826A45] rounded-full  bg-[#826A45]"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
              alt="Image not found"
            />
            <div className=" flex flex-col md:text-[18px]  md:mt-1 mt-30 ml-5 text-[85px] ">
              Call Anytime
              <p className=" font-bold md:text-[20px] text-[50px] ml-2">+964733-378901</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-50 w-150 ml-210 hidden md:block"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75"
          />
        </div>
      </div>
      <Chef />
      <div className="flex justify-center flex-col items-center font-[Marcellus]">
        <div className="text-[#826A45] font-semibold mt-30 text-[23px] dark:text-white">
          NEWS & BLOG
        </div>
        <div className=" font-semibold   text-[37px]">
          Our Latest News & Blog
        </div>
      </div>
      <News />
      <div className="mt-125"><Footer/></div>
      
    </div>
  );
}
