
export default function Chef() {
  return (
    <div>
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col ">
          <img
            className="mt-10 ml-20 w-160  hidden md:block"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
          />
          <div className="hidden md:block bg-white dark:bg-[#262525] p-15 shadow-2xl mt-[-90px] ml-20 mr-35">
            <div className="text-gray-600 mt-[-30px]  dark:text-white hidden md:block">
              {" "}
              By Md Sohag Burger ,Food
            </div>
            <div className="text-3xl font-semibold hidden md:block mt-3 mr-2 hover:text-[#826A45]">
              Picked up a Brussels burger Sprouts with ham
            </div>
            <div className="mt-5 text-[#826A45] hidden md:block text-[20px] dark:text-white">
              Read More{" "}
            </div>
          </div>
          <div className="bg-[#826A45] hidden md:block  justify-center w-20 ml-140 p-3 text-white text-[20px] font-semibold mt-[-300px]">
            {" "}
            24 DEC
          </div>
        </div>

        <div className="flex flex-col  md:hidden ">
          <div className="mt-10 ml-20 w-400">
            <img
              className="h-350 "
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
            />
            <div className=" bg-white   dark:bg-[#262525] p-10 shadow-2xl mt-[-90px] ml-20 mr-35">
              <div className="text-gray-600 mt-[50px] text-[65px] p-10 h-50 dark:text-white ">
                By Md Sohag Burger ,Food
              </div>
              <div className=" font-semibold  mt-3 mr-2 text-[80px] hover:text-[#826A45]">
                Picked up a Brussels burger Sprouts with ham
              </div>
              <div className="mt-10 text-[#826A45] ml-10  text-[60px] dark:text-white">
                Read More{" "}
              </div>
            </div>
            <div className="bg-[#826A45] m-5 justify-center w-70 h-70 absolute position top-12300  p-3 text-white text-[60px] font-bold">
              24 DEC
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <img
            className="mt-10 w-160 hidden md:block"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
          />
          <div className=" bg-white hidden md:block p-15 dark:bg-[#262525]  shadow-2xl  mt-[-90px] mr-35">
            <div className="text-gray-600 mt-[-30px] dark:text-white">
              {" "}
              By Md Sohag Burger ,Food
            </div>
            <div className="text-3xl font-semibold hidden md:block mt-3 mr-2 hover:text-[#826A45]">
              Picked up a Brussels burger Sprouts with ham
            </div>
            <div className="mt-5 text-[#826A45] text-[20px] hidden md:block dark:text-white">
              Read More{" "}
            </div>
          </div>
          <div className="bg-[#826A45] hidden md:block  justify-center w-20 ml-120 p-3 text-white text-[20px] font-semibold mt-[-300px]">
            {" "}
            24 DEC
          </div>
        </div>

        <div className="flex flex-col md:hidden">
          <div className="mt-10 ml-20 w-400">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
            className="h-350" />
            <div className=" bg-white p-15 dark:bg-[#262525]  shadow-2xl  mt-[-90px] mr-35">
              <div className="text-gray-600 mt-[50px] text-[65px] p-10 h-50 dark:text-white">
                {" "}
                By Md Sohag Burger ,Food
              </div>
              <div className="text-3xl font-semibold text-[80px]  mt-3 mr-2 hover:text-[#826A45]">
                Picked up a Brussels burger Sprouts with ham
              </div>
              <div className="mt-5 text-[#826A45] text-[60px] dark:text-white">
                Read More{" "}
              </div>
            </div>
            <div className="bg-[#826A45] flex justify-center ml-10  w-70 h-70  p-3 text-white text-[60px] font-bold absolute position top-12820 ">
              {" "}
              24 DEC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}