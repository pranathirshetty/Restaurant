"use client";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-cover bg-center md:h-screen md:w-screen h-600 w-410 md:border-transparent  "
        style={{
          backgroundImage:
            "url('https://restan-nextjs.vercel.app/assets/img/banner/14.jpg')",
        }}
      >
        <div className="bg-gray-800  text-white justify-between p-2 items-center dark:bg-gray-800">
          <div className="text-white rounded-sm flex row h-12 ">
            <img
              src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
             width="150"
              alt="image not found "
            />
            <button className="bg-green-600 ml-310 cursor-pointer p-1 m-2 rounded-xl">
            Buy Now
            </button>
          </div>
        </div>

        <div className="text-white flex row p-4 border-b hidden md:flex">
          <img
            className="position absolute left-18 top-20 justify-between ml-5 "
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
            height="30"
            width="25"
            alt="Image not found"
          />
          <div className="position absolute top-20 left-28 text-md ml-5 ">
            Phone:+4733378901
          </div>
          <img
            className="position absolute left-75 top-20 ml-5"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
            height="20"
            width="25"
          />
          <div className="position absolute top-20 left-85 text-md ml-5">
            Email:food@restan.com
          </div>

          <div className="ml-270 text-md font-medium">
            175 10h Street, Office 375 Berlin, De 21562
          </div>
        </div>
        <div className=" text-white font-normal md:text-xl flex-row p-2 text-[50px]  md:flex">
          <span className="ml-20 space-x-3 ">
            <a href="">Home⮟</a>{" "}
            <button onClick={() => router.push("/register")}>Register⮟</button>
            <button onClick={() => router.push("/login")}>Login⮟</button>
           
          </span>
          <span className="md:ml-210 space-x-3 ml-5">
            <button onClick={() => router.push("/blog")}>Blog⮟</button>  <button onClick={() => router.push("/menu")}>Menu⮟</button>    <button onClick={() => router.push("/aboutus")}>About us ⮟</button>
          </span>
        </div>
        <div>
          <img
            className="md:ml-180 position absolute top-42 md:mt-[20px] ml-170 md:h-20 md:w-30 h-60 w-80 mt-30"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
          />
        </div>
        <div className=" text-white font-serif">
          <div className=" md:text-8xl md:ml-109 md:mt-45 md:font-medium ml-70 md:text-[90px] text-[160px] mt-150 ">
            Best Restaurant
          </div>
          <div className="flex justify-center h-200 w-200 md:h-45 md:w-45 border-amber-100 md:border-2 border-8 ml-100 rounded-full md:ml-170 md:mt-15  mt-35 font-[poppins] md:text-3xl text-[75px]  font-medium">
            <div className="md:mt-12 ml-2 text-white font-sans mt-80 ">
              Best Food Since 1865
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}