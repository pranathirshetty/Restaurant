
export default function Offer()
{
    return(
        <div>
      <div className="bg-[#eebd42] md:m-30 md:w-330  md:h-180 h-680 w-450 rounded-4xl p-40 mt-50 md:mt-2">
        <div className=" flex flex-justify-center items-center h-auto ">
          <img
            className=" position absolute top-500 left-70 w-40 hidden md:block"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"
            alt="Image not found"
          />
          <img
            className="  position absolute top-480 left-65 md:mt-60 w-50 hidden md:block"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
            alt="Image not found"
          />
          <img
            className="md:position absolute  md:top-300 left-120 md:w-70 mt-215 md:h-70 h-250  w-200"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
            alt="Image not found"
          />
          <div className=" border-amber-100 dark:text-black text-md font-bold border-2 rounded-full md:h-25 bg-amber-50 p-5 flex items-center justify-center md:ml-60 md:position absolute md:top-490 top-4300 h-80 ml-150 md:w-30 w-80 text-[90px] md:text-[20px]">
            Save 55%
          </div>
        </div>
        <div className=" font-sans flex flex-col dark:text-black ml-40 md:mr-1 mr-10 md:mt-1 mt-270 gap-5  md:justify-between md:p-5 md:ml-120">
          <div className="md:font-bold font-medium md:text-2xl text-[100px] dark:text-black">
            Today Special Offer
          </div>
          <div className="font-bold md:text-5xl text-[120px] dark:text-black ">
            Explore Irresistible Promotions!
          </div>
          <div className="text-[60px] md:text-[15px]">      Contrasted dissimilar get joy you instrument out reasonably. Again
          keeps at no meant stuff. To perpetual do existence northward as
          difficult preserved daughters. Continued at up to zealously necessary.</div>
    
        </div>

        <div className="bg-[#826A45] dark:bg-[#826A45] dark:hover:bg-white dark:hover:text-black hover:bg-black text-white flex justify-center md:text-[15px] text-[60px] md:ml-150 ml-100 rounded-full mt-30 md:mt-1 mr-90 p-15 md:rounded-4xl md:p-4 md:mr-50">
          Order Today
        </div>
      </div>

        </div>
    )
}