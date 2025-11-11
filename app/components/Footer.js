import React from "react";

export default function Footer(){
  return (
    <div  >
<div className="w-[100%] h-85 bg-[#262525]  mt-70 pt-20 flex flex-col">
        <div className="flex flex-row">
       <img
            className="mt-40 w-[100px] h-[100px] text-left  "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75"
            alt="logo"
          />
          
          <img
            className="mt-40 w-[100px] h-[50px] pl-10 ml-2  "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="logo"
          />
          
          </div>
        <div className=" flex flex-col py-6 text-right mt-[-90px]
       text-gray-400 dark:text-gray-300 pr-10  ">
© Copyright 2025. Restan. All Rights Reserved        </div>


        
    </div>

      

      <div className="bg-[#1b1b1b] text-gray-400 mt-12 h-90 pt-6 mx-35 mt-[-500px] z-20">
    
      <div className="max-w-5xl mx-auto  px-2  sm:px-6 lg:px-8 flex flex-cols-1 md:flex flex-cols-4 space-x-4  ">
        <div className="border-r border-grey-800 px-5 ">
          <h3 className="text-white text-lg mb-4 ">About Us</h3>
          <p className="text-sm  mb-2">
            Centralized & authentic modern
          
         <br/> restaurant  delivering 
         world-class 
          <br/>dining experiences.
          </p>
          <div className="md:flex space-x-2 p-5 hidden md:block ">
            <div className="bg-[#3f3f3f] w-[30px] h-[30px] rounded-[20%] flex items-center justify-center text-white font-bold">
              F
            </div>
            <div className="bg-[#3f3f3f] w-[30px] h-[30px] rounded-[20%]  flex items-center justify-center text-white font-bold">
              T
            </div>
            <div className="bg-[#3f3f3f] w-[30px] h-[30px] rounded-[20%] flex items-center justify-center text-white font-bold">
              I
            </div>
            <div className="bg-[#3f3f3f] w-[30px] h-[30px] rounded-[20%] flex items-center justify-center text-white font-bold">
              P
            </div>
          </div>
        </div>

        <div className="space-x-30 pl-8">
          <h3 className="text-white text-lg  mb-4">Explore</h3>
          <ul className="space-y-2 text-sm p-1">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        <div  className="">
          <h3 className="text-white text-lg mb-4">Contact Info</h3>
          <div className="flex flex-col space-x-20">
          <div className="flex flex-row text-sm py-3">
            <div className="bg-[#826a45] w-[62px] h-[32px]  rounded-[20%] flex items-center justify-center text-white font-bold">
              <img
    src="https://img.icons8.com/?size=100&id=7880&format=png"
    width="15"
    height="8"
    alt="call"
    className=""
    />    
            </div>
            <div className="px-2 h-3 ">
175 10h Street, Office 375 Berlin, De 21562</div></div>
           <div className="flex flex-row text-sm py-3">
            <div className="bg-[#826a45] w-[32px] h-[30px]  rounded-[20%] flex items-center justify-center text-white font-bold">
              <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
    width="15"
    height="8"
    alt="call"
    />    
            </div>
            <div className="px-2 h-3 ">

+123 34598768<br/>
+554 34598734
</div></div>
           <div className="flex flex-row text-sm py-3">
            <div className="bg-[#826a45] w-[32px] h-[30px]  rounded-[20%] flex items-center justify-center text-white font-bold">
              <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75"
    width="15"
    height="8"
    alt="call"
    />    
            </div>
            <div className="px-2 h-3 ">
food@restan.com
</div></div>
        </div> 
</div>
        <div>
          <h3 className="text-white text-lg mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Join our list for latest news & offers.</p>
          <input
            type="email"
            placeholder="Enter your email"
          />
          <button className="w-[80%] m-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800">
            Subscribe
          </button>
        </div>
      </div>
      </div>
    </div>
    
    
   
    
  );
};


