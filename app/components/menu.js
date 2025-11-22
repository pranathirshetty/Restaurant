
export default function Menu({image,name,price})
{
    return (
        <div>
            <div className=" dark:bg-black ml-20 md:ml-8 md:w-110 w-380 dark:border-white text-center  bg-white p-6 rounded-xl shadow m-10 ">
            <img
              src={image}
              alt="Image not found"
              className=" md:h-70 md:mb-4 h-380 "
            />

            <h2 className="md:text-2xl text-[120px] dark:text-white text-black font-semibold ">
            {name}
            </h2>
            <p className="text-gray-900 dark:text-white md:text-sm text-[50px]">
              4 Chicken Legs,Chilli Sauce, Soft Drinks
            </p>
            <p className="text-amber-600 p-4 dark:text-[#826A45] text-7xl md:text-[20px]">${price}</p>
            <button className="border rounded-full  dark:text-white dark:bg-[#826A45] text-black md:px-30 p-3 m-4 text-[70px] md:text-sm hover:bg-[#826A45] hover:text-white transition ">
              Add to Cart
            </button>
          </div>
        </div>
    )

    
}