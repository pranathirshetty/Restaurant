import React from "react";

export default function Footer1(){
  return (
    <div  >
<div className="w-370 h-45 md:h-65 bg-[#262525] mt-180  md:mt-60 pt-20 flex flex-col">
        <div className="flex flex-row">
       <img
            className=" mt-20 w-[100px] h-[100px] text-left hidden md:block "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75"
            alt="logo"
          />
          
          <img
            className="md:mt-20 md:w-[120px] md:h-[70px] ml-150 pl-10 md:ml-2 mt-550 h-90 w-120  "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="logo"
          />
       <div className="text-white mt-[120px] ml-200 hidden md:block">© Copyright 2025. Restan. All Rights Reserved   </div>
          </div>

       <div className="text-white mt-[120px] ml-100 text-[50px] block md:hidden">© Copyright 2025. Restan. All Rights Reserved   </div>



        
    </div>

      

      <div className="bg-[#1b1b1b]  text-gray-400 md:w-auto w-420 h-950 md:h-70 pt-6 md:mx-35 mt-[-830px] md:mt-[-400px] z-20">
    
      <div className="md:max-w-5xl   md:mx-auto  px-2  sm:px-6 lg:px-8 flex flex-col md:flex-row  md:flex flex-cols-4 md:space-x-4  ">
<div className="border-r md:border-gray-500 w-100 md:h-50 h-auto">
          <h3 className="text-white text-[90px] md:mt-0 mt-10 md:text-lg mb-4 ml-5 ">About Us</h3>
          <p className="md:text-sm text-[70px] md:w-50 w-90   whitespace-nowrap md:mr-20 md:ml-0 ml-25">
            Continued at zealously necessary is <br/>Surrounded sir  
            motionless she end <br/> literature. Gay direction neglected.
          </p>
          <div className="flex md:space-x-2 space-x-10 p-5 py-2 md:py-5 md:ml-0 ml-20 h-100 w-180">
            <div className="bg-[#3f3f3f] md:w-[30px] md:h-[30px] w-80 h-50 md:mt-0 mt-10 md:text-[15px] text-[50px] flex items-center justify-center text-white font-bold">
              F
            </div>
            <div className="bg-[#3f3f3f] md:w-[30px] md:h-[30px] w-80 h-50 md:mt-0 mt-10 md:text-[15px] text-[50px] flex items-center justify-center text-white font-bold">
              T
            </div>
            <div className="bg-[#3f3f3f] md:w-[30px] md:h-[30px] w-80 h-50 md:mt-0 mt-10 md:text-[15px] text-[50px] flex items-center justify-center text-white font-bold">
              I
            </div>
            <div className="bg-[#3f3f3f] md:w-[30px] md:h-[30px] w-80 h-50 md:mt-0 mt-10 md:text-[15px] text-[50px] flex items-center justify-center text-white font-bold">
              P
            </div>
          </div>
        </div>

        <div className="space-x-2 pl-2 md:pl-8">
          <h3 className="text-white  text-[100px] md:text-lg  md:mb-4">Explore</h3>
          <ul className="md:space-y-2 text-[50px] space-y-11 md:text-sm p-1">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        <div  className="">
          <h3 className="text-white md:text-lg md:mb-4 text-[70px]">Contact Info</h3>
          <div className="flex flex-col space-x-10">
          <div className="flex flex-row text-sm py-3">
            <div className="bg-[#826a45] md:w-[62px]  rounded-[20%] flex items-center justify-center text-white font-bold">
              <img
    src="https://img.icons8.com/?size=100&id=7880&format=png"
    alt="call"
    className="md:h-8 md:w-10 h-40 w-40 md:p-2 p-8"
    />    
            </div>
            <div className="px-2 h-3 md:text-[13px] text-[60px]">
175 10h Street, Office 375 Berlin, De 21562</div></div>
           <div className="flex flex-row text-sm py-3">
            <div className="bg-[#826a45]  rounded-[20%] flex items-center justify-center text-white font-bold">
              <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
className="md:h-8 md:w-8 h-40 w-40 md:p-2 p-8"
    alt="call"
    />    
            </div>
            <div className="px-2 h-3  md:text-[13px] text-[60px]  md:ml-0 ml-10 ">

+123 34598768<br/>
+554 34598734
</div></div>
           <div className="flex flex-row text-sm py-3">
            <div className="bg-[#826a45]  rounded-[20%] flex items-center justify-center text-white font-bold">
              <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75"
  className="md:h-8 md:w-8 h-40 w-40 md:p-2 p-8 "
    alt="call"
    />    
            </div>
            <div className="px-2 h-3 md:ml-0 ml-10 md:text-[13px] text-[60px]  ">
food@restan.com
</div></div>
        </div> 
</div>
        <div>
          <h3 className="text-white text-[80px] md:text-lg mb-2 md:mb-4">Newsletter</h3>
          <p className="md:text-sm text-[60px] md:mb-3">Join our list for latest news and special offers.</p>
          <input
            type="email"
            className="m-10 p-10 text-[50px] md:text-[15px] md:p-2 md:m-2 "
            placeholder="Enter your email"
          />
          <button className="md:w-[80%] m-4 md:m-6 py-2 w-60 md:text-[15px] text-[50px] bg-amber-700 text-white rounded hover:bg-amber-800">
            Subscribe
          </button>
        </div>
      </div>
      </div>
    </div>
    
    
   
    
  );
};