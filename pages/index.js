import Image from "next/image";

import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/*text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          {/*title*/}
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transform Ideas <br />
            into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/*suubtitle*/}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </motion.p>
          {/*btn*/}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-explosion bg-cover bg-right bg-no-repeat opacity-50" />
      </div> */}
      {/* <div>image</div> */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat container w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particle */}
        <ParticleContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
        {/* avatar image */}
        
      </div>
    </div>
  );
};

export default Home;
