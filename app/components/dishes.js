
export default function Dishes({image,title})
 
{
    return (
<div>
            <img
              className="  dark:bg-[#262525] w-320 h-400 ml-40 md:ml-1  rounded-4xl md:rounded-2xl md:h-70 md:w-55 md:hover:scale-105"
              src={image}
              alt="image not found"
            
            />
            <div className= " dark:text-white text-amber-600  md:text-2xl text-[100px] md:ml-1 ml-130 font-sans font-bold  ">
            {title}
            </div>
          </div>
    );
}