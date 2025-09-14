import { ReactTyped } from "react-typed";
import { motion } from "framer-motion"
import Skills from "./Skills";
import { IoDocumentOutline } from "react-icons/io5";
import Experience from "./Experience";
import Projects from "./Projects";
import LastCard from "./LastCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Modal } from "@mantine/core";

const Home = () => {

  const handleViewResume = () => {
    window.open('/VivekResume.pdf');
  };

  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);


  return (
    <div className=" scroll-smooth h-auto w-auto flex flex-col">
      <div className=" bg-gradient-to-t from-[#2C5364] via-[#203A43] to-[#0F2027]  h-screen w-auto md:w-screen overflow-hidden">
      <div
      className={` h-auto ${
        navbar
          ? "fixed bg-[#0F2027] z-50 transition-all duration-500 ease-in"
          : "relative transition-all  duration-500 bg-inherit ease-out"
      } w-screen flex flex-col md:flex-row items-center  justify-between px-4 sm:px-8 md:px-16 lg:px-40`}
    >
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-4 py-4 w-full md:w-fit justify-between md:justify-start">
        <div className="text-lg flex flex-row justify-center items-center gap-2 font-semibold text-white">
          <ReactTyped
            strings={["Vivek Tarnallya"]}
            typeSpeed={40}
            backSpeed={50}
            startWhenVisible
          />
          <img
          src="/background-removebg-preview.png"
          alt="Logo"
          className="h-[6vh] sm:h-[8vh] md:h-[9vh] rounded-3xl"
        />
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "block h-[400px] md:h-auto" : "hidden"
        } md:flex flex-col md:flex-row md:items-center gap-4 py-4 w-full md:w-auto `}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row h-[300px] md:h-auto gap-4 md:gap-6 text-white bg-slate-300 w-full md:w-auto justify-center text-center items-center py-2 px-4 md:px-8 mt-2 rounded-lg md:rounded-full"
        >
          <a
            href="#skill"
            className="bg-[#2C5364] py-1 px-4 rounded-2xl w-[90px] md:w-[85px] text-center cursor-pointer font-medium text-sm sm:text-md lg:text-md"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="bg-[#2C5364] py-1 px-4 rounded-2xl w-[90px] md:w-[85px] text-center cursor-pointer font-medium text-sm sm:text-md lg:text-md"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-[#2C5364] py-1 px-4 rounded-2xl w-[90px] md:w-[85px] text-center cursor-pointer font-medium text-sm sm:text-md lg:text-md"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div
        className={`${
          isOpen ? "block pb-6 md:pb-0 mt-20 md:mt-0" : "hidden"
        } md:flex flex flex-row gap-6 justify-center mt-4 md:mt-0`}
      >
        <a
          href="https://github.com/vivekbeast"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl sm:text-3xl transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/vivek-tarnallya-981684259/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-2xl sm:text-3xl hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
    <div className=" h-[89%] relative md:flex md:justify-center flex justify-between items-center  md:items-center w-auto overflow-hidden  bg-inherit">
      <motion.div
        className=" hidden absolute w-full md:flex flex-row justify-center items-center h-screen bg-inherit"
        initial={{ height: "100vh", width: "100%" }}
        animate={{
          height: "90vh", // Shrinks down to a smaller height
          width: "2%", // Shrinks in width
          transition: { duration: 1, ease: "easeOut" },
        }}
        exit={{ opacity: 0 }}
      >

        {/* Top half */}
        <motion.div
  className="absolute overflow-y-hidden rounded-2xl top-0 left-0 w-[30px] sm:w-[25px] xs:w-[20px] h-full bg-[#f4f4f4]"
  initial={{ height: "46vh", x: "0" }}
  animate={{
    rotate: -45, // Rotate 30 degrees upwards 
    transition: { duration: 1, ease: "easeOut", delay: 0.5, stiffness: 100 },
  }}
  whileInView={{ x: "500px" }}
  style={{ transformOrigin: "bottom center" }} // Rotate around the bottom-center
>
</motion.div>



        {/* Bottom half */}
        <motion.div
          className="absolute overflow-y-hidden rounded-2xl bottom-0 left-0 w-[30px] sm:w-[25px] xs:w-[20px] h-full bg-inherit border-2 border-[#f4f4f4]"
          initial={{ height: "46vh" , x: "0"}}
          animate={{
            rotate: 45, // Rotate 30 degrees downwards
            transition: { duration: 1, ease: "easeOut", delay: 0.5, stiffness: 100 },
          
          }}
          whileInView={{ x: "500px" }}
          style={{ transformOrigin: "top center" }} // Rotate around the top-center
        ></motion.div>

<motion.div
  className="w-[30px] sm:w-[25px] xs:w-[20px] absolute flex flex-row justify-center items-center h-screen rounded-3xl bg-[#f4f4f4]"
  initial={{ height: "20vh", opacity: 0, rotate: 30 }}
  animate={{
    height: ["20vh", "30vh", "20vh"], // Oscillate height between 20vh and 30vh
    opacity: [0, 1, 0], // Blink effect
    transition: {
      duration: 2, // Duration of one oscillation
      ease: "easeInOut",
      repeat: Infinity, // Repeat indefinitely
      repeatType: "loop",
      stiffness: 100
    },
  }}
  whileInView={{
    height: "85vh", // Expand to full height when in view
    opacity: 1, // Fade in
    rotate: 30, // Rotate to 30 degrees
    transition: { duration: 1, ease: "easeOut", delay: 0.5 }, // Transition settings
  }}
>
<motion.div
  initial={{ x: "0", y: 0 }}
  animate={{
    x: "20px",
    y: "90px",
    rotate: -30, // Rotate 30 degrees upwards
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  }}
  style={{ transformOrigin: "bottom center" }}
  className=" flex flex-col items-start justify-center gap-2 text-start h-fit  "
>
  <h1 className="text-lg md:text-lg font-bold whitespace-nowrap  leading-snug text-white">
    Hi, I&apos;m <span className="text-green-500 text-lg">Vivek Tarnallya</span> —
    <br />
    Crafting Digital Experiences with Code <br /> and Creativity!
  </h1>
  
      
  </motion.div>
<motion.div
  initial={{ x: "0", y: 0 }}
  animate={{
    x: "30px",
    y: "-110px",
    rotate: -30, // Rotate 30 degrees upwards
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  }}
  style={{ transformOrigin: "center" }}
  className="flex flex-col items-start justify-start text-center h-fit"
>

  <div className="w-[380px] flex flex-col justify-center items-center text-center  overflow-auto ">
  <h1 className="text-lg font-semibold  text-white">
          A passionate full-stack developer specializing in MERN, Next.js, and Java...<span className=" text-green-400 cursor-pointer hover:underline" onClick={() => setOpened(true)}>
            Read More
          </span>
        </h1>
      
</div>


<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title="About Me"
  size="lg"
  overlayProps={{
    backgroundOpacity: 0.7,
    blur: 8,
    className: "backdrop-blur-md"
  }}
  centered
  radius="xl"
  padding="xl"
  styles={{
    content: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    },
    header: {
      paddingBottom: '1.5rem',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: '1.5rem'
    }
  }}
>
  <div className="space-y-6">
    {/* Enhanced Text Content */}
    <div className="prose prose-lg max-w-none">
      <div className="text-black  leading-relaxed space-y-4">
        <p className="text-lg font-medium text-gray-900 ">
          A passionate full-stack developer with deep expertise in front-end
          technologies and a growing mastery of backend systems.
        </p>
        
        <p className="text-base">
          I specialize in building intuitive, responsive, and engaging digital
          experiences with frameworks like{" "}
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-md text-sm font-medium">
            React
          </span>,{" "}
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium">
            Next.js
          </span>, and the{" "}
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md text-sm font-medium">
            MERN stack
          </span>,
          while also engineering robust backend solutions with{" "}
          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-md text-sm font-medium">
            Node.js
          </span>{" "}
          and{" "}
          <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md text-sm font-medium">
            Java
          </span>.
        </p>
        
        <p className="text-base">
          With a knack for clean, scalable code and seamless design, I bridge
          the gap between user experience and technical performance—striving to
          make the web both beautiful and powerful.
        </p>
      </div>
    </div>



    {/* Enhanced Resume Button */}
    <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <button
        onClick={handleViewResume}
        className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600  text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <IoDocumentOutline className="w-5 h-5 transition-transform group-hover:rotate-12" />
        <span className="relative">View My Resume</span>
      </button>
      
      <button
        onClick={() => setOpened(false)}
        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
      >
        Close
      </button>
    </div>
  </div>
</Modal>


</motion.div>
</motion.div>


        <motion.div
          className="absolute overflow-y-hidden rounded-2xl top-0 right-0 w-[30px] sm:w-[25px] xs:w-[20px] h-full bg-inherit border-2 border-[#f4f4f4]"
          initial={{ height: "46vh", x:"0" }}
          animate={{
            rotate: 45, // Rotate 30 degrees upwards
            transition: { duration: 1, ease: "easeOut", delay: 0.5,stiffness: 100 },
          }}
          whileInView={{ x: "-500px" }}
          style={{ transformOrigin: "bottom center" }} // Rotate around the bottom-center
        ></motion.div>

        <motion.div
          className="absolute overflow-y-hidden rounded-2xl bottom-0 right-0 w-[30px] sm:w-[25px] xs:w-[20px] h-full bg-[#f4f4f4]"
          initial={{ height: "46vh", x:"0" }}
          animate={{
            rotate: -45, // Rotate 30 degrees downwards
            transition: { duration: 1, ease: "easeOut", delay: 0.5,stiffness: 100 },
          }}
          whileInView={{ x: "-500px" }}
          style={{ transformOrigin: "top center" }} // Rotate around the top-center
        ></motion.div>

      </motion.div>


     <div className="h-full absolute md:hidden flex flex-row gap-0 justify-center items-center ">


  {/* Left Bracket */}
  <motion.div
  initial={{ marginLeft: "0px" }}
  animate={{ marginLeft: "-80px" }} // Tailwind's `-ml-20` equivalent in pixels
  transition={{
    duration: 0.7, // Duration in seconds
    ease: "easeOut", // Optional easing
  }}
  className="relative font-light w-full h-full leading-none px-0"
>
  <img src="/open-bracket.png" className="h-full w-full" alt="Open Bracket" />
</motion.div>


  {/* Content Section */}
  <motion.div 
 initial={{ scaleX: 0 }}
 animate={{
   scaleX: 1,
 }}
 transition={{
   duration: 0.6, // Duration in seconds
 }}
  className="flex flex-col absolute items-center md:items-start w-auto space-y-4 px-24">
    {/* Header Section */}
    <motion.div
      animate={{
        transition: { duration: 1, ease: "easeOut", delay: 0.5 },
      }}
      className="text-left h-fit space-y-4"
    >
      <h1 className="text-md whitespace-normal flex flex-col font-bold w-fit leading-snug text-white">
       <span> Hi, I&apos;m <br /> <span className="text-green-500 text-xl">Vivek Tarnallya</span> —</span> <br />
        <span>Crafting Digital Experiences with Code and Creativity!</span>
      </h1>
      <button
        onClick={handleViewResume}
        className="bg-green-600 border-2 border-white text-white flex justify-center items-center gap-2 py-2 px-4 md:px-6 text-sm md:text-md font-medium rounded-md hover:bg-inherit transition duration-300"
      >
        <IoDocumentOutline /> <span>See My Resume</span>
      </button>
    </motion.div>
  </motion.div>

  {/* Right Bracket */}
  <motion.div 
  initial={{ marginRight: "0px" }}
  animate={{ marginRight: "-80px" }} // Tailwind's `-ml-20` equivalent in pixels
  transition={{
    duration: 0.7, // Duration in seconds
    ease: "easeOut", // Optional easing
  }}
  
  className="  relative h-full w-full font-light leading-none px-0 ">
    {/* {"}"} */}
    <img src="/close-bracket.png" className=" h-full w-full" alt="" />
  </motion.div>


 {/* Description Section */}
    {/* <motion.div
      animate={{
        transition: { duration: 1, ease: "easeOut", delay: 0.5 },
      }}
      className="text-left h-fit w-full"
    >
      <h1 className="text-sm text-left font-semibold leading-snug text-white">
        A passionate software developer <br /> specializing in front-end development, <br />
        I transform ideas into intuitive, responsive, <br />
        and engaging digital experiences. With a <br />
        knack for clean code and seamless design, <br />
        I strive to make the web a more <br /> beautiful and functional place.
      </h1>
    </motion.div> */}




</div>


      </div> 

    </div>
    <Skills />
    <Experience />
    <Projects />
    <LastCard />
    </div>
  )
}

export default Home
