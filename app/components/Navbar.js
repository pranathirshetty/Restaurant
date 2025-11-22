"use client"
import React from "react";
import { useRouter } from "next/navigation";

export default function Navbar({toggleTheme,darkMOde,hed,nav}){
   const router = useRouter();
    return ( <div >
        <div className="bg-[#826a45] hidden md:block h-10 px-7 py-2  text-white">
<div ><div className="flex flex-row pl-40 m1-20">
    <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
    width="15"
    height="8"
    alt="call"
    />       
    <div className="px-2">+4733378901 </div> 
    <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75"
    width="18"
    height="8"
    alt="call"
    className="ml-6"
    />      
<div className="px-2"> Email: food@restan.com</div>
<div className="flex flex-row ml-100 border-r border-gray-300 px-4">
    <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=128&q=75"
    width="18"
    height="8"
    alt="call"
    className="ml-6"
    /> <div className="px-2">English</div>
</div>
<div>
    <div className="md:flex space-x-2 px-5 text-sm ">
            <div className="bg-[#3f3f3f] w-[25px] h-[25px] rounded-full flex items-center justify-center text-white ">
              F
            </div>
            <div className="bg-[#3f3f3f] w-[25px] h-[25px] rounded-full flex items-center justify-center text-white ">
              T
            </div>
            <div className="bg-[#3f3f3f] w-[25px] h-[25px] rounded-full flex items-center justify-center text-white">
              I
            </div>
            <div className="bg-[#3f3f3f]  w-[25px] h-[25px] rounded-full flex items-center justify-center text-white">
              P
            </div>
          </div>
</div>
</div>
</div>
   <div></div>
        </div>
        <div >
        <div className=" md:bg-black bg-white "
       >
        <div className="max-w-6xl mx-auto px-4 am:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
        <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
        alt="logo"
        className="w-10 h-10 hidden md:block"
        />
        <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=1920&q=75"
        alt="logo"
        className="w-10 h-10 md:hidden block"
        />

        </div>
        <div></div>
        <div className=" md:flex items-center font-bold font-serif font-Times New Roman text-black md:gap-6  md:text-sm text-[15px] md:px-4">
     
           <button
           className="md:text-white" onClick={() => router.push("/")}>Home</button>
        <a className="md:text-white px-2" href="/aboutus">About us  </a>
        <a className="md:text-white px-2" href="/menu">Menu  </a>
        <a className="md:text-white px-2" href="/blog">Blog </a>
        <a className="md:text-white px-2" href="/shop">Shop </a>
        </div>
        <div className="flex items-center gap-3">
        
          <button className="w-full py-2 px-4 bg-amber-700 hidden md:block text-white rounded hover:bg-amber-800">
            Reservation
        </button>
        </div>
        </div>
        </div>
        
                <div className=" border-b border-grey-900 dark:boder-grey-100 mx-10"></div>
            <div className="bg-cover bg-center h-40 md:h-100"
            style={{
                backgroundImage:
                "url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')"
            }}  > 
                
               <div className="text-white text-center pt-4 md:pt-30  ">
           <div className="text-3xl md:text-6xl font-bold font-serif font-Times New Roman md:mb-6 mb-4">{hed}</div>
           <div className="text-sm md:test-lg font-semibold font-serif font-Times New Roman">🏠Home  ❯{nav} </div>
        </div>
            </div>
        </div>
        
        </div>
        
        </div>
    );
}