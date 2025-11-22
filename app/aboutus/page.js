"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import Time from "../components/time";

export default function Blog() {
  const hed = "About Us";
  const nav = "about-us";

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
      <div className="min-h-screen  bg-white-300 dark:bg-black text-grey-900 dark:text-white  ">
        <div>
          <Navbar
            toggleTheme={toggleTheme}
            darkMode={darkMode}
            hed={hed}
            nav={nav}
          />
        </div>
        {/*Start of code of page */}
        {/*partener*/}

        <div
          className="bg-cover bg-center  md:h-90  h-40"
          style={{
            backgroundImage:
              "url('https://restan-nextjs.vercel.app/assets/img/shape/1.png')",
          }}
        >
          <div className="text-center pt-10 md:pt-25">
            <div className=" md:text-xl text-sm text-center text-yellow-900">
              OUR TRUSTED 8K HAPPY PARTNER
            </div>
            <div className="md:p-6  p-2 flex justify-around items-center mt-2 md:mt-6 pb-2 md:pb-30">
              <div>
                <img
                  className="w-[200px] h-[100px] md:pl-9 md:ml-2 hidden md:block  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
                />
              </div>
              <div>
                <img
                  className="w-[200px] h-[100px] md:pl-9 md:ml-2  hidden md:block "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  className="w-[200px] h-[100px] md:pl-9 md:ml-2  hidden md:block "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  className="w-[100px] md:w-[200px] md:h-[100px] h-[50px] md:pl-9   md:ml-2  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  className="w-[100px] md:w-[200px] h-[50px] md:h-[100px] md:pl-9 pl-5 md:mr-0 mr-15 md:ml-2  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        {/*about us */}
        <div className="bg-gray-100 w-[100%] md:h-150 h-120  ">
          <div>
            <div className="flex flex-col md:flex-row ">
              <div>
                <img
                  className="md:w-[350px] w-[100%] h-[200px] md:h-[400px] md:mt-25  "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ENbkpy6J-Qrq0sdzPlRQSHSGIUu7NTgxXNdN1AoU3sazpwWeWnAlEZwiZYhnqmcE85U&usqp=CAU"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  className="w-[350px] h-[400px] pl-8 mt-25 hidden md:block "
                  src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/5-5.jpg"
                  alt="logo"
                />
              </div> 
              <div className="bg-white h-70 md:h-110 md:w-170 w-[100%] md:p-5 md:p-16 md:mt-40 md:ml-[-30px]">
                <div className="text-yellow-900 text-lg">ABOUT US</div>
                <div className="text-black md:text-4xl text-2xl py-3 md:py-6 px-1 md:px-3 font-bold font-serif font-Times New Roman">
                  We Invite You
                  <br /> To Visit Our Restaurant
                </div>
                <div className="text-gray-500 text-sm">
                  A relaxing and pleasant atmosphere, good jazz, dinner, and
                  cocktails. The Patio Time Bar opens in the center of Florence.
                  The only bar inspired by the 1960s, it will give you a
                  experience that you’ll have a hard time forgetting.
                </div>
                <div className="flex justify-between items-center py-4">
                  <button className="px-3 py-3 bg-yellow-600 text-white  hover:bg-black ">
                    Discover More
                  </button>
                </div>
              </div>
              <div>
                <img
                  className="w-[250px] h-[100px] mt-24 ml-[-90px] hidden md:block  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        {/*chef */}
        <div
          className="bg-cover bg-center md:h-150 h-260 bg-[#ebe9e5]"
          
        >
          <div className=" text-center  ">
            <div className="text-yellow-900 test-3xl pt-10 md:pt-20">MASTER CHEFS</div>
            <div className="text-black text-2xl md:text-5xl p-4 font-bold font-serif font-Times New Roman mb-6">
              Meet Our Special Chefs
            </div>
            <div className="flex flex-col md:flex-row mt-5 md:mt-10 justify items-center gap-15 md:gap-30 md:ml-50">
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/1-1.jpg"
                    className="w-[250px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-[#826a45] w-70ml-[-14px] h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold font-serif font-Times New Roman p-2">

                    Alexander Petllo
                    <br />
                    Assistant Chef
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-2.jpg"
                    className="w-[250px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-[#826a45] w-70 ml-[-14px]  h-18 mt-[-80px]  ">
                  <div className="text-center text-white text-md font-bold font-serif font-Times New Roman p-2">
                    Mendia Juxef
                    <br />
                    Burger King
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00eW8B6XAtmNmhHEMVENWGe8XvwkZX7QXDi4q1oz6Lt_fJZixkuxbQcnXaKTq8NADf5Y&usqp=CAU"
                    className="w-[250px] h-auto   rounded-[100%] p-4 border border-gray-900 "
                  />
                </div>
                <div className="bg-[#826a45] w-70 ml-[-14px] h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold font-serif font-Times New Roman p-2">
                    Petro William
                    <br />
                    Main Chef
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*time */}
        <Time/>
        {/*End of code of page */}
      </div>
      <div className="mt-[-100px] h-70"> <Footer /></div>
    
    </div>
  );
}