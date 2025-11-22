 export default function Blogcard({ img, date, auth, title, dec}){
    return(
        <div className="bg-gray-100 dark:bg-grey-800 justify-items-center md:ml-35 h-115 md:h-160 items-center md:w-[800px] rounded-xl ">
            <div className="w-full h-65 md:h-56 ">
                <img src={img} alt={title}
                className="w-full h-50 md:h-80 "/>
            </div>

        <div className="px-2 mt-[-50px] md:mt-[-10px] md:p-30">
            <div className="text-sm text-grey-500 dark:text-grey-300 flex items-center">
        <div>🗓️ {date}</div>
        <div>👤 {auth}</div>
    
            </div>
            <div className="md:text-4xl text-2xl mt-2 md:mt-6 font-bold dark:text-grey-200  md:mb-3">
                {title}
            </div>
        <div className="md:text-sm  text-[12px] mt-2 md:mt-4  text-grey-300">
        {dec}
        </div>
        <div className="flex justify-between items-center">
        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg md:mt-8 mt-5 hover:bg-yellow-500">
            Read More
        </button>
        </div>
        </div>

        </div>
    )
}