"use client"
import React from "react";

export default function Navbar({toggleTheme,darkMOde,hed,nav}){
    return ( <div >
        <div className="bg-yellow-700 px-7 py-4 text-white">
<div><div>📞 +4733378901          
📧 food@restan.com</div>
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
        <div className="hidden md:flex items-center gap-6 text-sm  border-b border-grey-800">
        <a className="text-white" href="">Home</a>
        <a className="text-white" href="">Pages</a>
        <a className="text-white" href="">Menu</a>
        <a className="text-white" href="">Blog</a>
        <a className="text-white" href="">Shop</a>
        </div>
        <div className="flex items-center gap-3">
        
          <button className="w-full py-2 px-4 bg-amber-700 text-white rounded hover:bg-amber-800">
            Reservation
        </button>
        </div>
        </div>
        </div>
        
                <div className=" border-b-5 border-grey-900 dark:boder-grey-100 mx-10"></div>
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