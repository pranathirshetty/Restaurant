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
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      date: "12 Aug 2024",
      auth: "John Russ",
      title: "Picked up a Brussels burger sprouts.",
      dec:
        "Bridgingle dissimilar to disconcert yet peremptorily. Plan upon yet way get old spot.",
    },
    {
      id: 2,
      img:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&q=80",
      date: "13 Aug 2024",
      auth: "Admin",
      title: "This prefabricated passive house highly",
      dec:
        "Plan upon yet way get cold spot its week. Almost do am or limits hearts.",
    },
    {
      id: 3,
      img:
        "https://images.unsplash.com/photo-1541542684-4f3c8b9c8b8c?w=1200&q=80",
      date: "14 Aug 2024",
      auth: "John Baas",
      title: "Overcame breeding point concerns has.",
      decc: "Resolve parties but why she shewing. She sang know now.",
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
   <div className={darkMode ? "dark" :""}>
    <div className="min-h-screen  bg-white-300 dark:bg-grey-900 text-grey-900 dark:text-grey-100 ">
      <div>
<Navbar toggleTheme={toggleTheme} darkMode={darkMode}

hed={hed}
nav={nav}/>

      
      
</div>
<div className="max-w-6xl mx-auto px-4 "> 
<div className="space-y-8 mt-10">
  {
    blogs.map((b)=>(
      <Blogcard
      key={b.id}
      img={b.img}
      date={b.date}
      auth={b.auth}
      title={b.title}
      dec={b.des}
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
