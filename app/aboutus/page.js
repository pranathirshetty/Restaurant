"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { redirect } from "next/dist/server/api-utils";

export default function Blog() {
  const hed = "About Us";
  const nav = "about-us";

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={darkMode ? "dark overflow-x-hidden" : "overflow-x-hidden"}>
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
          className="bg-cover bg-center h-90"
          style={{
            backgroundImage:
              "url('https://product-assets.faasos.io/eatsure/production/lazy-image-placeholder.jpeg?d=375&tr=w-0.5,h-0.5')",
          }}
        >
          <div className="text-white text-center pt-25">
            <div className="text-center text-yellow-900">
              OUR TRUSTED 8K HAPPY PARTNER
            </div>
            <div className="p-6  flex justify-around items-center mt-6 pb-30">
              <div>
                <img
                  className="w-[200px] h-[100px] pl-9 ml-2  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
                />
              </div>
              <div>
                <img
                  className="w-[200px] h-[100px] pl-9 ml-2  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  className="w-[200px] h-[100px] pl-9 ml-2  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  className="w-[200px] h-[100px] pl-9 ml-2  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  className="w-[200px] h-[100px] pl-9 ml-2  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        {/*about us */}
        <div className="bg-gray-100 w-[100%] h-150  ">
          <div>
            <div className="flex flex-row">
              <div>
                <img
                  className="w-[350px] h-[400px] mt-25  "
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
              <div className="bg-white h-100 w-170 p-16 mt-40 ml-[-30px]">
                <div className="text-yellow-900 text-lg">ABOUT US</div>
                <div className="text-black text-4xl py-6 px-3 font-bold font-serif font-Times New Roman">
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
                  className="w-[250px] h-[100px] mt-24 ml-[-90px]  "
                  src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        {/*chef */}
        <div
          className="bg-cover bg-center h-150 bg-[#ebe9e5]"
          
        >
          <div className=" text-center  ">
            <div className="text-yellow-900 test-md pt-20">MASTER CHEFS</div>
            <div className="text-black text-5xl p-4 font-bold font-serif font-Times New Roman mb-6">
              Meet Our Special Chefs
            </div>
            <div className="flex flex-row mt-10 justify items-center gap-30 ml-50">
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
        <div className=" w-[100] h-170 ">
          <div className="flex flex-row  pt-20 px-50">
            <div className="flex flex-col">
              <div className="text-8xl text-gray-100  font-bold font-serif font-Times New Roman mb-[-13px]">
                RESTAN
              </div>
              <div className="bg-black w-150 h-100 bg-center ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1694707367241-379972ecdc10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
                  className="w-[100%] h-[80%] mt-8"
                />
              </div>
            </div>

            <div className="flex flex-col ml-[-80px]">
              <div className="bg-white dark:bg-[#262525]  w-130 h-100 p-16">
                <div className="text-[#826a45] text-black  dark:text-white text-[30px] font-Marcellus font-cursive w-600">Opening Hours</div>
                <div className="text-[#666] font-Lato,sans-serif text-sm py-2 
">
                  A relaxing and pleasant atmosphere, good jazz, dinner, and
                  cocktails. The Patio Time Bar opens in the center..
                </div>
                <div className="flex flex-col text-[16px] py-5 font-Marcellus  dark:text-white text-black font-cursive font-bold">
                  <div className="flex flex-row">
                    <div>Sunday to Tuesday:</div>
                    <div className="border-b border-gray-500 pb-1 w-25 mb-[10px] mx-2"> </div>
                    <div>10:00 - 09:00</div>
                  </div>
                  <div className="flex flex-row">
                    <div>Sunday to Tuesday:</div>
                    <div className="border-b border-gray-500 pb-1 w-25 mb-[10px] mx-2"> </div>
                    <div>10:00 - 09:00</div>
                  </div>
                  <div className="flex flex-row">
                    <div className="text-#04000b">Sunday to Tuesday:</div>
                    <div className="border-b border-gray-500 pb-1 w-25 mb-[10px] mx-2"> </div>
                    <div>10:00 - 09:00</div>
                  </div>
                  </div>
                  
                  <div className="flex flex-row py-2">
                    <div className="bg-[#826a45] rounded-full w-15 h-15">

                <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
    width="30"
    height="30"
    alt="call"
    className="m-3"
    />  
                    </div>
                    <div className="flex flex-col px-5">
                    <div className="text-[#666]">Call Anytime</div>
                      <div className="text-lg text-[#04000b] font-semibold   dark:text-white  font-serif font-Times New Roman">
                        +964733-378901</div>
                    </div>
                  </div>
                  
               
               
              </div>
              <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75"
        alt="logo"
        className="w-440 h-50 ml-25 mt-10 "
        />

            </div>
          </div>
        </div>
        {/*End of code of page */}
      </div>
      <div className="mt-[-120px]"> <Footer /></div>
    
    </div>
  );
}
