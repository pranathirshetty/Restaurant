"use client"
import Blogcard from "../components/Blogcard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react"

export default function Blog(){
const hed="Blog Standard";
const nav="blog-standard";
    
  const blogs = [
    {
      id: 1,
      img:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75",
      date: "12 Aug 2024",
      auth: "John Russ",
      title: "Picked up a Brussels burger sprouts.",
      dec:
        "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    },
    {
      id: 2,
      img:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75",
      date: "13 Aug 2024",
      auth: "Admin",
      title: "This prefabricated passive house highly",
      dec:
        "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    },
    {
      id: 3,
      img:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75",
      date: "14 Aug 2024",
      auth: "John Baas",
      title: "Overcame breeding point concerns has.",
      dec: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now",
    },
  ];
  const [darkMode,setDarkMode ]=useState(false);

  useEffect(()=>{ 
    const saved= localStorage.getItem("theme");
    if(saved==="dark") 
      setDarkMode(true);
  },[]);
       const toggleTheme=()=>{
        setDarkMode((prev)=>{
          const newMode=!prev;
          localStorage.setItem("theme",newMode?"dark":"light");
          return newMode;
        });
       };
       
    return (
   <div className={darkMode ? "dark " :""}>
    <div className="min-h-screen  bg-white-300 dark:bg-grey-900 text-grey-900 dark:text-grey-100 ">
      <div >
<Navbar toggleTheme={toggleTheme} darkMode={darkMode}

hed={hed}
nav={nav}/>

      
      
</div>
<div className="max-w-6xl mx-auto px-4 "> 
<div className="space-y-8  mt-10">
  {
    blogs.map((b)=>(
      <Blogcard
      key={b.id}
      img={b.img}
      date={b.date}
      auth={b.auth}
      title={b.title}
      dec={b.dec}
      />
    ))
  }
</div>

</div>
    </div>

    
<Footer/>
   </div>
        
    )
}
