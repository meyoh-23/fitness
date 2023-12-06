import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomepageGraphics from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import sponsorFortunes from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section 
    id="home"
    className="gap-16 bg-gray-20 pb-10 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div className="md:-mt-top-20"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5 }}
          transition={{duration: 0.5}}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {opacity: 1, x: 0 }
          }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nesciunt incidunt, corporis quidem in praesentium doloremque at cupiditate blanditiis sed debitis a et animi velit excepturi necessitatibus recusandae unde eum.
            </p>
          </motion.div>
           {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8 md:justify-start">
          <ActionButton setSelectedPage={setSelectedPage} children="Join Now"/>
          <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={()=>setSelectedPage(SelectedPage.ContacUs)}
          href={`#${SelectedPage.ContacUs}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>
        </div>

         {/* IMAGE */}
      <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
        <img src={HomepageGraphics} alt="home-page-graphic" />
      </div>
      </div>

      {/* sponsors */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsors" />
              <img src={SponsorForbes} alt="forbes-sponsors" />
              <img src={sponsorFortunes} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
    
  )
}

export default Home;