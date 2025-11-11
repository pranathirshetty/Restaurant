 export default function Blogcard({ img, date, auth, title, dec}){
    return(
        <div className="bg-gray-100 dark:bg-grey-800 justify-center ml-14 shadow-lg h-150 justify-center items-center w-[1000px] rounded-xl ">
            <div className="w-full h-65 md:h-56 ">
                <img src={img} alt={title}
                className="w-full h-80 "/>
            </div>

        <div className="p-30">
            <div className="text-sm text-grey-500 dark:text-grey-300 flex items-center">
        <div>🗓️ {date}</div>
        <div>👤 {auth}</div>
    
            </div>
            <div className="text-4xl mt-6 font-bold dark:text-grey-200 mb-3">
                {title}
            </div>
        <div className="text-sm mt-4  text-grey-300">
        {dec}
        </div>
        <div className="flex justify-between items-center">
        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg mt-8  hover:bg-yellow-500">
            Read More
        </button>
        </div>
        </div>

        </div>
    )
}
