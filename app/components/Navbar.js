"use client"
import React from "react";

export default function Navbar({toggleTheme,darkMOde,hed,nav}){
    return ( <div >
        <div className="bg-[#826a45] h-10 px-7 py-2  text-white">
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
            <div className="bg-[#3f3f3f] w-[25px] h-[25px] rounded-full flex items-center justify-center text-white">
              P
            </div>
          </div>
</div>
</div>
</div>
   <div></div>
        </div>
        <div >
        <div className=" bg-black "
       >
        <div className="max-w-6xl mx-auto px-4 am:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
        <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
        alt="logo"
        className="w-10 h-10 "
        />

        </div>
        <div></div>
        <div className="hidden md:flex items-center gap-6 text-sm  ">
        <a className="text-white" href="/">Home</a>
        <a className="text-white" href="/aboutus">About us</a>
        <a className="text-white" href="/Menu">Menu</a>
        <a className="text-white" href="/Blog">Blog</a>
        <a className="text-white" href="/shop">Shop</a>
        </div>
        <div className="flex items-center gap-3">
        
          <button className="w-full py-2 px-4 bg-amber-700 text-white rounded hover:bg-amber-800">
            Reservation
        </button>
        </div>
        </div>
        </div>
        
                <div className=" border-b border-grey-900 dark:boder-grey-100 mx-10"></div>
            <div className="bg-cover bg-center h-100"
            style={{
                backgroundImage:
                "url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')"
            }}  > 
                
               < div className="text-white text-center pt-30  ">
           <div className="text-6xl font-bold font-serif font-Times New Roman mb-6">{hed}</div>
           <div className="test-lg fontsemibold font-serif font-Times New Roman">🏠Home  ❯{nav} </div>
        </div>
            </div>
        </div>
        
        </div>
        
        </div>
    );
}