
"use client";
import Footer from "../components/footer";
import Link from "next/link";
export default function Register()
{
    return (
        <div>
        <div className="bg-gray-800 text-white justify-between p-2 items-center dark:bg-gray-800">
          <div className="text-white rounded-sm flex row   ">
            
            <img
              src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
              height="100"
              width="150"
              alt="image not found "
            />
            <button className="bg-green-600 ml-310 cursor-pointer p-1 m-2 rounded-xl">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-[#826A45] p-2 flex flex-row ">
 <img
            className="ml-22 "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
            height="20"
            width="25"
            alt="Image not found"
          />
          <div className="ml-5 text-white">  Phone:+4733378901</div>
    
         <img
            className="ml-20 "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75"
            height="20"
            width="25"
            alt="Image not found"
          />
          <div className=" ml-2 text-white">  Email: food@restan.com</div>
          <img className="ml-130"
           src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=128&q=75"
           alt="Image not found"
       height="30"
       width="30"/>
       <div className="text-white ml-3 mt-1 text-[16px]"> English</div>
     </div>
      <div className="absolute bg-black/30"></div>
  <div className="bg-cover bg-center h-120 border-transparent"    style={{
          backgroundImage:
            "url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')",
        }}>
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
    className="ml-20 p-5"
       alt="Image not found"
       height="50"
       width="150"/>
        <div className=" text-white font-normal text-lg  row p-2 flex justify-center mr-40 mt-[-70px]">
          <span className="ml-20 space-x-3 ">
            <Link href="/">Home⮟</Link> <a href="">Pages⮟</a> <a href="">Menu⮟</a>
          </span>
          <span className="ml-2 space-x-3">
      
            <a href="">Blog⮟</a> <a href="">Shop⮟</a> <a href="">Contact Us⮟</a>
          </span>
        </div> <div className="text-white text-[50px] font-bold font-[Marcellus]  flex justify-center mt-35">Register Page</div> 
      <div className="text-white flex justify-center text-[20px]">Home register </div>
        </div>
        <div className="flex flex-row dark:bg-white">
        <img className="position absolute top-160 h-15 left-45"
         src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
      <img className="h-150 ml-30 w-155 "
       src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
      alt="image not found"
    />
    <div className="w-1/2 flex flex-col  font-[Marcellus] items-center mt-20 ">
    <div className="text-3xl text-[#826A45]">CREATE AN ACCOUNT</div>  
     <div className="text-[18px] text-gray-600">Enter your details ato create a new account</div> 
       <input type="text" placeholder="Email*" className="w-100 p-4 bg-gray-200 mt-5 text-black border-gray-600 rounded-md"/>
              <input type="text" placeholder="Password*" className="w-100 p-4 bg-gray-200 mt-5 text-black border-gray-600 rounded-md"/>

       <input type="text" placeholder="Confirm Password*" className="w-100 p-4 bg-gray-200 mt-5 text-black border-gray-600 rounded-md"/>
       <button className="w-100 p-2 text-[20px] mt-5 text-white bg-[#826A45] rounded-md"> Register</button>
<div className="mt-5 text-[28px] font-medium dark:text-black">Or Register With</div>
<div className="flex flex-row ">
  <div className=" border border-gray-800 pl-20 pr-20  pt-2 pb-4 text-[20px] m-2 rounded-md flex flex-row cursor-pointer">
     <img
     className="h-6 mr-2 mt-1 dark:text-black" src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
      />Google</div>
    <div className=" border border-gray-800 pl-20 pr-20 pt-2  m-2  text-[20px] rounded-md flex flex-row cursor-pointer">
      <img
     className="h-6 mr-2 mt-1 dark:text-black" src="https://cdn-icons-png.flaticon.com/128/3128/3128304.png"
      />Facebook</div>

</div>
<span className="flex flex-row text-[20px] dark:text-black">Already have an account? <span className="text-red-700 px-2 underline cursor-pointer">Login now</span></span>
    </div>
    
    </div>
    <Footer/>
        </div>
    )
}