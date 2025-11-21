 export default function Blogcard({ img, name,halfPrice,fullPrice, dec1,dec2}){
    return(
        <div className="  mt-5 m-2 md:ml-10 ">
            <div className="flex flex-col">
                <div className="flex flex-row border border-t-white md:border-hidden space-x-2">
                    <div><img
                    src={img}
                    alt={name}
                    className="w-15 h-15 hidden md:block rounded-full"/>
                    </div>
                    <div className="flex flex-col   w-90">
                        <div className="flex flex-row ">
                    <div className="text-white text-[18px] md:text-[20px]">{name}</div>
                                        <div className="border-y hidden md:borderlock border-gray-500 pb-1 h-1 mt-4 w-[50%] mx-2"> </div>

                    </div>
                    <div className="text-gray-500 text-[12px] md:text-[15px]">{dec1}</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row  space-x-2">
                            <div className="text-white text-[18px] md:text-[20px]">${halfPrice}</div>
                            <div className="text-white text-[18px] md:text-[20px]">${fullPrice}</div>
                        </div>
                    
                    <div className="text-gray-500 text-[12px] md:text-[15px]">{dec2}</div>
                    </div>
                  </div>
            </div>
        

        </div>
    )
}
