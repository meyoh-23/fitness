import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import { SelectedPage } from "@/shared/types";
import ContactUs from "./scenes/contacts";
import Footer from "./scenes/footer";

function App() {
  const [topOfPage, setTopOfPage] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

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
        <ContactUs
        setSelectedPage={setSelectedPage}
        />
        <Footer/>
      </div>
    </>
  )
}

export default App;
