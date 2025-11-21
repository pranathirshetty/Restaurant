
export default function Feature({image,title})
{
    return(
      
              <div className=" md:p-30 p-20 mt-70  md:mt-1 md:w-1/3 w-120 md:ml-1 ml-120 font-sans items-center  text-center  flex flex-col md:gap-10 ">
          <img
          className="md:h-28 md:w-30 h-100 w-200"
            src={image}
       
          />
          <div className=" md:text-2xl text-[55px] dark:text-white  text-black font-semibold">
          
          {title}
          </div>
          <div className="text-gray-500 md:text-[15px] w-250 text-[60px] md:max-w-[310px]">
           
            Belonging sir curiosity discovery extremity yet forfeited prevailed
            own off. Traveling by introduced of mr terminated.
          </div>
        </div>
      
    )
}