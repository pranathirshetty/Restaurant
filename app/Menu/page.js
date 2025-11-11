"use client"
import Navbar from "../components/Navbar";

export default function Menu(){
    const hed = "Menu";
  const nav = "menu";
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