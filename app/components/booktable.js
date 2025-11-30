
export default function Table()
{
    return (
        <div>
            <div className="text-black dark:bg-[#262525] dark:text-white font-medium flex-col text-[130px] font-[Marcellus] md:text-2xl ml-10 md:ml-20  pl-15 bg-gray-100 md:pt-8 md:pb-10 md:mr-280 rounded-2xl   md:position absolute md:top-170 pt-20 top-650  ">
          Book a table 
          <img
            className=" md:h-18 bg-[#826A45] rounded-full position absolute md:top-[-40px]  h-80 -top-60"
            src="https://tse4.mm.bing.net/th/id/OIP.B32knwXxMpKJBZTgKbypLgAAAA?pid=ImgDet&w=88&h=88&c=7&o=7&rm=3"
            alt="Image not found"
          />
          <div className=" mr-12 mt-8 md:text-[18px] w-400 h-400 md:h-auto md:w-auto text-[80px]">
            <div className=" border-black border-1 dark:border-white md:m-5 md:p-2 m-21 p-7">
              <input type="text" placeholder="Phone" />
            </div>
            <div className=" border-1 md:m-4 md:p-2 m-21 p-7">
              <input type="number" placeholder="People" />
            </div>
            <div className="border-1 md:m-4 md:p-2 m-21 p-7 ">
              <input type="text" placeholder="Date" />
            </div>
            <div className=" border-1 md:m-4 md:p-2 m-21 p-7">
              <input type="text" placeholder="Time" />
            </div>
            <div className=" text-white bg-[#826A45] p-10 md:p-4 rounded-2xl md:mr-35 md:mt-10 mr-230 md:ml-1 ml-20 ">
              <a href=""> Book a Table </a>
            </div>
          </div>
        </div>
        </div>
    )
}