export default function Time (){
    return(
        <div className="bg-gray-100 w-[100%] md:h-170 h-250">
          <div className="flex flex-col md:flex-row  pt-20  md:px-50">
            <div className="flex flex-col">
              <div className="text-8xl  xl text-gray-300 hidden sm:block font-bold font-serif font-Times New Roman mb-[-15px]">
                RESTAN
              </div>
              <div className="bg-black md:w-150 w-120 h-100 md:bg-center mr-4">
                <iframe
                  src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=onEam1iH34szfnZL"
                  className="w-[100%] h-[80%] mt-8 "
                />
              </div>
            </div>

            <div className="flex flex-col md:ml-[-80px]">
              <div className="md:bg-white  dark:bg-[#262525] w-[100%] md:w-130 h-80 md:h-100 p-5 md:p-16">
                <div className="text-[#826a45] text-black  dark:text-white text-[30px] font-Marcellus font-cursive md:w-600">Opening Hours</div>
                <div className="text-[#666] font-Lato,sans-serif text-sm md:py-2  py-3
">
                  A relaxing and pleasant atmosphere, good jazz, dinner, and
                  cocktails. The Patio Time Bar opens in the center..
                </div>
                <div className="flex flex-col md:text-[16px] text-sm py-2 md:py-5 font-Marcellus  dark:text-white text-black font-cursive  md:font-bold">
                  <div className="flex flex-row">
                    <div>Sunday to Tuesday:</div>
                    <div className="border-b border-gray-500 pb-1 w-25 mb-[10px] mx-2"> </div>
                    <div>10:00 - 09:00</div>
                  </div>
                  <div className="flex flex-row">
                    <div>Sunday to Tuesday:</div>
                    <div className="border-b border-gray-500 pb-1 w-25 mb-[10px] mx-2"> </div>
                    <div>10:00 - 09:00</div>
                  </div>
                  <div className="flex flex-row">
                    <div className="text-#04000b">Sunday to Tuesday:</div>
                    <div className="border-b border-gray-500 pb-1 w-25 mb-[10px] mx-2"> </div>
                    <div>10:00 - 09:00</div>
                  </div>
                  </div>
                  
                  <div className="flex flex-row py-2">
                    <div className="bg-[#826a45] rounded-full w-15 h-15">

                <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
    width="30"
    height="30"
    alt="call"
    className="m-3"
    />  
                    </div>
                    <div className="flex flex-col px-5">
                    <div className="text-[#666]">Call Anytime</div>
                      <div className="text-lg text-[#04000b] font-semibold   dark:text-white  font-serif font-Times New Roman">
                        +964733-378901</div>
                    </div>
                  </div>
                  
               
               
              </div>
              <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75"
        alt="logo"
        className="w-440 h-50 md:ml-25   md:mt-10 "
        />

            </div>
          </div>
        </div>
    )
}