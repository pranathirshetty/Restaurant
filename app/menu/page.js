"use client";
import Menucard from "../components/Menucard";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Time from "../components/time";

export default function Menu() {
  const hed = "Restaurant Best Food";
  const nav = "food-menu";

  const blogs = [
    {
      id: 1,
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75",
      name: "Chicken Alfredo",
      halfPrice: 20,
      fullPrice: 40,
      dec1: "Ricotta / goat cheese / beetroot",
      dec2: "Free Drinks",
    },
    {
      id: 2,
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75",
      name: "Fish Chips",
      halfPrice: 36,
      fullPrice: 70,
      dec1: "Atlantic / chips / salad / tartare",
      dec2: "Free Drinks",
    },
    {
      id: 3,
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75",
      name: "Ebony Fillet Steak",
      halfPrice: 44,
      fullPrice: 85,
      dec1: "Truffle mash / pepper sauce",
      dec2: "Free Drinks",
    },
    {
      id: 4,
      img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75",
      name: "Chicken Grill",
      halfPrice: 20,
      fullPrice: 40,
      dec1: "Ricotta / goat cheese / beetroot",
      dec2: "Free Drinks",
    },
  ];
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMOde(true);
  }, []);
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={darkMode ? "dark overflow-hidden" : "overflow-hidden"}>
      <div className="min-h-screen  bg-white-300 dark:bg-grey-900 text-grey-900 dark:text-grey-100 ">
        <div>
          <Navbar
            toggleTheme={toggleTheme}
            darkMode={darkMode}
            hed={hed}
            nav={nav}
          />
        </div>
        <div
          className="bg-cover  bg-center bg-[#f1f4e2] h-90  md:h-100"
          style={{
            backgroundImage:
              "url('https://restan-nextjs.vercel.app/_next/static/media/3-dark.5fc6bab6.png')",
          }} ></div>
            <div>
            <div className="flex md:flex-row  md:rounded-l-full md:rounded-r-full w-70 ml-15 md:w-138 text-black md:h-13 md:ml-100  mt-[-300px]  bg-[#fbfafa]  flex-col" >
              <button className="hover:text-white border border-black md:border-hidden pl-10 p-4 hover:rounded-l-full hover:bg-[#826a45]">MAIN DISHES</button>
              <button className="hover:text-white border border-black md:border-hidden p-4 px-6 hover:bg-[#826a45]">DESSERTS</button>
              <button className="hover:text-white border border-black md:border-hidden p-4 px-6 hover:bg-[#826a45]">SEA FOOD</button>
              <button className="hover:text-white border border-black md:border-hidden p-4 hover:rounded-r-full hover:bg-[#826a45]">BEVERAGE</button>
              </div>
            </div>
          
        <div className="bg-[#262525] dark:bg-grey-800 md:mx-40 mt-10  md:h-130 h-168 rounded-xl">
          
          <div className="flex flex-col md:flex-row">
            <div>
              <img
                src="https://restan-nextjs.vercel.app/assets/img/thumb/3.jpg"
                alt="leftimage"
                className="md:w-100 md:h-130 w-[100%]"
              />
            </div>
            <div className="bg-[#826a45] hidden md:block w-40 h-40 rounded-full  mt-20 ml-[-80px] justify-items-center ">
              <div className="text-orange-400 text-2xl mt-12">15%</div>
              <div className="text-white text- font-serif font-Times New Roman">
                Discount
              </div>
            </div>
            <div>
              <div className="flex flex-row mt-8 md:mt-15 space-x-2 ml-87 md:ml-116 text-white">
                <div className="border border-white  md:px-2 ">Half</div>
                <div className="border border-white md:px-2">Full</div>
                {/*menu */}
              </div>
              <div className="">
                <div className="md:space-y-8  ">
                  {blogs.map((b) => (
                    <Menucard
                      key={b.id}
                      img={b.img}
                      name={b.name}
                      halfPrice={b.halfPrice}
                      fullPrice={b.fullPrice}
                      dec1={b.dec1}
                      dec2={b.dec2}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Time />

        <div
          className="bg-cover bg-center h-200 md:h-115"
          style={{
            backgroundImage:
              "url('https://restan-nextjs.vercel.app/assets/img/banner/2.jpg')",
          }}
        >
          <div className="flex flex-col md:flex-row text-white justify-items-center ">
            <div className="flex flex-col mt-10 md:mt-20 font-serif font-Times New Roman w-90 md:w-150 ml-10 md:ml-50">
              <div className="md:text-[20px] text-[15px]">Reservation</div>
              <div className="md:text-[40px] text-[30px]">
                Reservation Your Favorite Private Table
              </div>
              <div className="text-sm">
                A relaxing and pleasant atmosphere, good jazz, dinner, and
                cocktails. The Patio Time Bar opens in the center of Florence.
                The only bar inspired by the 1960s, it will give you a
                experience that you’ll have a hard time forgetting.
                <div className="flex flex-col md:flex-row ">
                  <div className="pr-5  mt-5 md:border-r ">
                    <div className="text-[19px]">Launch Menu</div>
                    <div className="text-[13px]">30+ items</div>
                  </div>
                  <div className="md:pl-5 mt-5">
                    <div className="text-[19px]">Dinner Menu</div>
                    <div className="text-[13px]">50+ items</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#262525] w-90 p-10 rounded-2xl font-serif font-Times New Roman space-y-3 h-110 ml-7 md:ml-15 mt-10 md:mt-20">
          <label className="">Phone</label>
          <input
          type="tel"
          placeholder="+91 6894739204"
          className="w-full p-2 rounded-md border border-white text-gray-500"
          />
          <label className="">Person</label>
           <input
          type="text"
          placeholder="3 Person"
          className="w-full p-2 rounded-md border border-white text-gray-500"
          />
          <label className="">Date</label>
           <input
          type="date"
          placeholder="Date"
          className="w-full p-2 rounded-md border border-white text-gray-500"
          />
          <label className="">Time</label>
           <input
          type="time"
          placeholder="Time"
          className="w-full p-2 rounded-md border border-white text-gray-500"
          />
          <button className="hover-white hover:bg-white hover:text-black w-40 p-2 bg-[#826a45] text-white rounded-md mt-2">
            Book A Table
          </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60">
<Footer/>
     </div>
    </div>
  );
}