import React from "react";

export default function Footer(){
  return (
    <div ><div >
    <div className="bg-black text-gray-400 mt-12 pt-6 mx-35 bottom-[-9000px] z-20">
    
      <div className="max-w-7xl mx-auto  px-2  sm:px-6 lg:px-8 flex flex-cols-1 md:flex flex-cols-4 gap-8  gap-20">
        <div className="border-r border-grey-800 px-5">
          <h3 className="text-white text-lg mb-4 ">About Us</h3>
          <p className="text-sm  mb-2">
            Centralized & authentic modern
          
         <br/> restaurant  delivering 
         world-class 
          <br/>dining experiences.
          </p>
        </div>

        <div>
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

        <div>
          <h3 className="text-white text-lg mb-4">Contact Info</h3>
          <p>📍123 Food St, City Center</p>
          <p>📱+123 456 789</p>
          <p>📧info@restan.com</p>
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
      </div>eihi 
<div className="w-[100%] h-80 bg-black dark:bg-gray-200 mt-[-100px] flex flex-col">
        <div className="flex flex-row">
       <img
            className="mt-2 w-[200px] h-[300px] text-left  "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75"
            alt="logo"
          />
          
          <img
            className="mt-40 w-[200px] h-[100px] pl-10 ml-2  "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="logo"
          />
          </div>
        <div className=" flex flex-col py-6 text-right mt-[-50px]
       text-gray-400 dark:text-gray-300 pr-10">
© Copyright 2025. Restan. All Rights Reserved        </div>


        
    </div>
      
    </div>
    
    
    </div>
    
  );
};


