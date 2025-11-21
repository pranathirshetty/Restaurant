
"use client";
import Footer from "../components/footer";
import Link from "next/link";
export default function Register()
{
    return (
        <div>
        <div className="bg-gray-800 text-white justify-between p-2 md:w-auto w-430 items-center dark:bg-gray-800">
          <div className="text-white rounded-sm flex row   ">
            
            <img
              src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
              height="100"
              width="150"
              alt="image not found "
            />
            <button className="bg-green-600 ml-320 cursor-pointer p-1 m-2 rounded-xl">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-[#826A45] p-2 flex flex-row hidden md:flex ">
 <img
            className="ml-22 hidden md:block "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
            height="20"
            width="25"
            alt="Image not found"
          />
          <div className="ml-5 text-white hidden md:block">  Phone:+4733378901</div>
    
         <img
            className="ml-20 hidden md:block "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75"
            height="20"
            width="25"
            alt="Image not found"
          />
          <div className=" ml-2 text-white hidden md:block">  Email: food@restan.com</div>
          <img className="ml-130 hidden md:block"
           src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=128&q=75"
           alt="Image not found"
       height="30"
       width="30"/>
       <div className="text-white ml-3 mt-1 text-[16px] hidden md:block"> English</div>
     </div>
      <div className="absolute bg-black/30"></div>
  <div className="bg-cover bg-center md:h-120 h-200 md:w-auto w-430 border-transparent"    style={{
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
        </div> <div className="text-white text-[115px] md:text-[50px] font-bold font-[Marcellus]  flex justify-center mt-35">Login Page</div> 
      <div className="text-white flex justify-center  text-[55px] md:text-[20px]">Home login </div>
        </div>
        <div className="flex md:flex-row flex-col dark:bg-white">
       
  <img 
    className="absolute md:top-40 md:left-10 top-10 left-10 h-10 w-10"
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
  />

  <div className="md:ml-30 md:mt-10 ml-40 shrink-0">
    <img 
      className="w-500 md:w-[700px] h-250 md:h-[550px]"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
      alt="image not found"
    />
  </div>
    <div className="w-[600px]  flex flex-col  font-[Marcellus] items-center mt-20 ">
    <div className="md:text-3xl md:ml-1 ml-250  text-[100px] whitespace-nowrap text-[#826A45]">WELCOME BACK </div>  
     <div className="md:text-[18px] text-gray-600 md:ml-1 ml-250 text-[80px] whitespace-nowrap ">Enter your details ato create a new account</div> 
       <input type="text" placeholder="Email*" className="w-250 md:w-100  p-10 md:p-4 md:text-[15px] text-[70px] md:ml-1 ml-250 bg-gray-200 mt-5 text-black border-gray-600 rounded-md"/>
       <input type="text" placeholder="Password*" className="w-250  md:w-100 p-10 md:p-4 md:text-[15px] text-[70px] md:ml-1 ml-250 bg-gray-200 mt-5 text-black border-gray-600 rounded-md"/>

      
       <button className="md:w-100 w-250 p-10 md:p-4 md:text-[20px] text-[70px] md:ml-1 ml-250 mt-5 text-white bg-[#826A45] rounded-md">Lgin</button>
<div className="mt-5 md:text-[28px] whitespace-nowrap md:ml-1 ml-210 text-[105px] font-medium dark:text-black">Or Login  With</div>
<div className="flex md:flex-row flex-col md:gap-4 gap-10 md:m-4 m-10">
  <div className=" border border-gray-800 pl-20 pr-20 pt-2  m-2 text-[50px] md:ml-1 ml-100  md:text-[20px] rounded-md flex flex-row cursor-pointer">
      <img
     className="md:h-6 h-20 mr-2 mt-1 dark:text-black" src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
      />Google</div>
    <div className=" border border-gray-800 pl-20 pr-20 pt-2  m-2 text-[50px] md:ml-1 ml-100  md:text-[20px] rounded-md flex flex-row cursor-pointer">
      <img
     className="md:h-6 h-20 mr-2 mt-1 dark:text-black" src="https://cdn-icons-png.flaticon.com/128/3128/3128304.png"
      />Facebook</div>

</div>
<span className="flex flex-row text-[70px] md:text-[20px] whitespace-nowrap md:ml-1 ml-150  dark:text-black">Already have an account? <span className="text-red-700 px-2 underline cursor-pointer">Register now</span></span>
    </div>
    
    </div>
    <Footer/>
        </div>
    )
}