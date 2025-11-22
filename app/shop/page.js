"use client"
import Navbar from "../components/Navbar";

export default function Shop(){
    const hed = "Shop";
  const nav = "shop";
return(
     
            <div>
              <Navbar
                toggleTheme={0}
                darkMode={0}
                hed={hed}
                nav={nav}
              />
            </div>

)

}