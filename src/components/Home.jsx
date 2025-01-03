import { ReactTyped } from "react-typed";
import { motion } from "framer-motion"
import Skills from "./Skills";
import { IoDocumentOutline } from "react-icons/io5";
import Experience from "./Experience";
import Projects from "./Projects";
import LastCard from "./LastCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {

  const handleViewResume = () => {
    window.open('/RESUME.pdf', '_blank');
  };


  return (
    <div className=" h-auto w-auto flex flex-col">
      <div className=" bg-gradient-to-t from-[#e5ffd1] to-[#98f1c3]  h-screen w-screen overflow-hidden">
      <div className=" h-[11%] w-screen flex flex-row items-center bg-inherit justify-between px-44">
        <div className=" flex flex-row items-center gap-4 py-4 w-fit">
        <div className="text-lg font-semibold">
        <ReactTyped
        strings={["Vivek Tarnallya"]}
        typeSpeed={40}
        backSpeed={50}
        startWhenVisible
        />
        </div>
          <img src="/background-removebg-preview.png" alt="Logo" className=" h-[9vh] rounded-3xl" />
        </div>
        <div className=" flex flex-row items-center py-4">
        <motion.div
        initial={{ opacity: 0, x: -50 }} // Initially off-screen to the left
        whileInView={{ opacity: 1, x: 0 }} // Fade in and move to the original position when it comes into view
        viewport={{ once: true, amount: 0.5 }} // Trigger animation once when 50% of the element is in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        className=" bg-[#e5ffd1] flex flex-row gap-6 w-full justify-center items-center py-2 px-8 mt-2 rounded-full">
          <a href="#skill" className=" bg-slate-100 py-1 px-3 rounded-2xl hover:text-green-800 cursor-pointer font-medium text-md">Skills</a>
          <a href="#projects" className=" bg-[#d8ffd1] py-1 px-3 rounded-2xl hover:text-green-400 cursor-pointer font-medium text-md">Projects </a>
          <a href="#contact" className=" bg-[#98f1c3a9] py-1 px-3 rounded-2xl hover:text-green-100 cursor-pointer font-medium text-md">Contact</a>
        </motion.div>
        </div>
        <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/vivekbeast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-3xl hover:text-gray-800 transition duration-300"
                >
                  <FaGithub />
                </a>
        
                <a
                  href="https://www.linkedin.com/in/vivek-tarnallya-981684259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-3xl hover:text-blue-500 transition duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
      </div>
      <div className=" h-[89%] relative flex justify-center  items-center w-screen bg-inherit">
      <motion.div
        className="absolute w-full flex flex-row justify-center items-center h-screen bg-inherit"
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
          className="absolute overflow-y-hidden rounded-2xl top-0 left-0 w-[30px] h-full bg-black"
          initial={{ height: "46vh", x:"0" }}
          animate={{
            rotate: -45, // Rotate 30 degrees upwards 
            transition: { duration: 1, ease: "easeOut", delay: 0.5 ,stiffness: 100 },
          }}
          whileInView={{ x: "500px",  }}
          style={{ transformOrigin: "bottom center" }} // Rotate around the bottom-center
        >
        </motion.div>


        {/* Bottom half */}
        <motion.div
          className="absolute overflow-y-hidden rounded-2xl bottom-0 left-0 w-[30px] h-full bg-black"
          initial={{ height: "46vh" , x: "0"}}
          animate={{
            rotate: 45, // Rotate 30 degrees downwards
            transition: { duration: 1, ease: "easeOut", delay: 0.5, stiffness: 100 },
          
          }}
          whileInView={{ x: "500px" }}
          style={{ transformOrigin: "top center" }} // Rotate around the top-center
        ></motion.div>

<motion.div
  className="w-[30px] absolute flex flex-row justify-center items-center h-screen rounded-3xl bg-black"
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
    x: "10px",
    y: "80px",
    rotate: -30, // Rotate 30 degrees upwards
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  }}
  style={{ transformOrigin: "bottom center" }}
  className="flex flex-col items-start justify-center gap-2 text-start h-fit  "
>
  <h1 className="text-lg md:text-xl font-bold whitespace-nowrap  leading-snug text-gray-800">
    Hi, I&apos;m <span className="text-green-500 text-2xl">Vivek Tarnallya</span> —
    <br />
    Crafting Digital Experiences with Code <br /> and Creativity!
  </h1>
  <button
        onClick={handleViewResume}
        className="bg-green-500 text-white flex flex-row justify-center text-center items-center gap-2 py-2 px-6 uppercase text-md font-medium rounded-md hover:bg-green-600 transition duration-300"
      >
      <IoDocumentOutline /> <span> See My Resume</span>
  </button>
      
  </motion.div>
<motion.div
  initial={{ x: "0", y: 0 }}
  animate={{
    x: "60px",
    y: "-30px",
    rotate: -30, // Rotate 30 degrees upwards
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  }}
  style={{ transformOrigin: "bottom center" }}
  className="flex flex-col items-center justify-center text-center h-fit"
>
  <h1 className="text-md font-bold whitespace-nowrap  leading-snug text-gray-800">
  A passionate software developer <br /> specializing in front-end development,<br /> I transform ideas into intuitive, responsive,<br /> and engaging digital experiences. With a <br />knack for clean code and seamless design,<br /> I strive to make the web a more <br /> beautiful and functional place.
  </h1>
</motion.div>
</motion.div>


        <motion.div
          className="absolute overflow-y-hidden rounded-2xl top-0 right-0 w-[30px] h-full bg-black"
          initial={{ height: "46vh", x:"0" }}
          animate={{
            rotate: 45, // Rotate 30 degrees upwards
            transition: { duration: 1, ease: "easeOut", delay: 0.5,stiffness: 100 },
          }}
          whileInView={{ x: "-500px" }}
          style={{ transformOrigin: "bottom center" }} // Rotate around the bottom-center
        ></motion.div>

        <motion.div
          className="absolute overflow-y-hidden rounded-2xl bottom-0 right-0 w-[30px] h-full bg-black"
          initial={{ height: "46vh", x:"0" }}
          animate={{
            rotate: -45, // Rotate 30 degrees downwards
            transition: { duration: 1, ease: "easeOut", delay: 0.5,stiffness: 100 },
          }}
          whileInView={{ x: "-500px" }}
          style={{ transformOrigin: "top center" }} // Rotate around the top-center
        ></motion.div>

      </motion.div>
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
