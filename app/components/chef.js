
export default function Chef()
{
    return(
        <div>
            <div className="bg-cover dark:bg-[#262525] bg-center h-170 bg-[#ebe9e6]">
        <div className=" text-center  ">
          <div className="text-yellow-700 text-[20px] pt-17 dark:text-white">MASTER CHEFS</div>
          <div className="text-black text-[50px] p-2 dark:text-white font-semibold font-sans mb-6">
            Meet Our Special Chefs
          </div>
          <div className="flex flex-row mt-10 justify items-center gap-30 ml-45">
            <div className="flex flex-col">
              <div>
                <img
                  src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/1-1.jpg"
                  className="w-[320px] h-80  rounded-[100%] p-4  border border-gray-900"
                />
              </div>
              <div className="bg-[#826A45] w-75 ml-[17px] h-18 mt-[-88px]">
                <div className="text-center text-white text-md font-bold font-serif font-Times New Roman p-2">
                  Alexander Petllo
                  <br />
                  <div className="font-medium "> Assistant Chef</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img
                  src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-2.jpg"
                  className="w-[320px] h-80   rounded-[100%] p-4 border border-gray-900"
                />
              </div>
              <div className="bg-[#826A45] w-70 ml-[17px]  h-18 mt-[-88px] ">
                <div className="text-center text-white text-md font-bold font-serif font-Times New Roman p-2">
                  Mendia Juxef
                  <br />
                  Burger King
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00eW8B6XAtmNmhHEMVENWGe8XvwkZX7QXDi4q1oz6Lt_fJZixkuxbQcnXaKTq8NADf5Y&usqp=CAU"
                  className="w-[320px] h-80   rounded-[100%] p-4 border border-gray-900 "
                />
              </div>
              <div className="bg-[#826A45] w-70 ml-[17px] h-18 mt-[-88px]">
                <div className="text-center text-white text-md font-bold font-serif font-Times New Roman p-2">
                  Petro William
                  <br />
                  Main Chef
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}