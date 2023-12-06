import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import { SelectedPage } from "@/shared/types";

function App() {
  const [topOfPage, setTopOfPage] = useState<boolean>(false);

  useEffect( ()=> {
    const handleScroll = () => {
      if ( window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if ( window.scrollY !== 0) setTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <>
      <div className="bg-gray-20">
        <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        topOfPage={topOfPage}
        />
        <Home 
        setSelectedPage={setSelectedPage}
        />
        <Benefits
        setSelectedPage={setSelectedPage}
        />
        <OurClasses
        setSelectedPage={setSelectedPage}
        />
      </div>
    </>
  )
}

export default App;
