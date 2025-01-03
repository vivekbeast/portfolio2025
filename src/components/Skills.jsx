import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaYarn } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { ImNpm } from "react-icons/im";
import { DiJava } from "react-icons/di";
import { motion } from "framer-motion";
import { SiMysql, SiMongodb, SiPostman, SiGithub } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandThreejs } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <div id="skill" className=" h-auto w-screen bg-[#e5ffd1] flex flex-col justify-center items-center text-center">

      <div className=" h-[200px] w-screen flex flex-col justify-center items-start gap-4 px-40 ">
        <div className=" text-2xl shadow-lg  text-green-700 font-semibold flex flex-row text-start w-fit justify-start py-2 px-8 bg-white items-center gap-2 rounded-lg"> <GiSkills color="black"  /> <span className=" text-black">Skills</span></div> 
        {/* <h2 className=" text-lg uppercase text-green-600 w-full text-center font-medium">Enthusiastic Software Developer, eager to explore and work with every tech stack!</h2>    */}
     </div>  
      <div className=" h-[500px] flex flex-col  items-center gap-5">
        <motion.h1 
        initial={{ opacity: 0, x: 100 }} // Start off the screen to the right
        // animate={{ opacity: 1, x: 0 }} // Animate to the normal position
        whileInView={{opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className=" text-3xl text-gray-700 font-semibold">Software Development</motion.h1>
        <div className=" mt-2">
        <motion.div 
        initial={{ opacity: 0, x: 100 }} // Start off the screen to the right
        // animate={{ opacity: 1, x: 0 }} // Animate to the normal position
        whileInView={{opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="flex flex-col justify-center items-center space-y-4 ">
     <div className=" flex flex-row space-x-4">
     <div className="relative group">
        <div className="text-red-500 bg-white p-4 rounded-full shadow-md">
          <FaHtml5 size={25} />
        </div>
        <div className="absolute  transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          HTML5
        </div>
      </div>
      
      <div className="relative group">
        <div className="text-yellow-400 bg-white p-4 rounded-full shadow-md">
          <IoLogoJavascript size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          JavaScript
        </div>
      </div>

      <div className="relative group">
        <div className="text-blue-500 bg-white p-4 rounded-full shadow-md">
          <SiTailwindcss size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          TailwindCSS
        </div>
      </div>

      <div className="relative group">
        <div className="text-[#61DAFB] bg-white p-4 rounded-full shadow-md">
          <FaReact size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          React
        </div>
      </div>

      <div className="relative group">
        <div className="text-black bg-white p-4 rounded-full shadow-md">
          <RiNextjsFill size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          Next.js
        </div>
      </div>

      <div className="relative group">
        <div className="text-purple-700 bg-white p-4 rounded-full shadow-md">
          <TbBrandRedux size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          Redux
        </div>
      </div>
     </div>

      <div className=" flex flex-row space-x-4">
      <div className="relative group">
        <div className="text-indigo-500 bg-white p-4 rounded-full shadow-md">
          <FaYarn size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          Yarn
        </div>
      </div>

      <div className="relative group">
        <div className="text-black bg-white p-4 rounded-full shadow-md">
          <ImNpm size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          npm
        </div>
      </div>

      <div className="relative group">
        <div className="text-gray-800 bg-white p-4 rounded-full shadow-md">
          <FcLinux size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          Linux
        </div>
      </div>

      <div className="relative group">
        <div className="text-red-600 bg-white p-4 rounded-full shadow-md">
          <DiJava  size={25} />
        </div>
        <div className="absolute transform -translate-y-[6%] bottom-1/2  mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
          Java
        </div>
      </div>
      </div>

        </motion.div>
        </div>
        <motion.div 
        initial={{ opacity: 0, x: 100 }} // Start off the screen to the right
        // animate={{ opacity: 1, x: 0 }} // Animate to the normal position
        whileInView={{opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        className="space-y-4 text-lg text-start mt-4">
      <p>
        <span role="img" aria-label="laptop" className="mr-2">💻</span>
        <span >Building seamless, engaging user interfaces for dynamic web experiences</span>
      </p>
      <p>
        <span role="img" aria-label="tools" className="mr-2">🛠️</span>
        Streamlining workflows and automating tasks to boost efficiency</p>
      <p>
        <span role="img" aria-label="gear" className="mr-2">⚙️</span>
        Optimizing performance and state management for smooth interactions</p>
      
        </motion.div>
      </div>
      <div className="h-[500px] flex flex-col items-center gap-5">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="text-3xl text-gray-700 font-semibold"
      >
        Database & Tools
      </motion.h1>

      <div className="mt-2">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="flex flex-col justify-center items-center space-y-4"
        >
          <div className="flex flex-row space-x-4">
            <div className="relative group">
              <div className="text-green-500 bg-white p-4 rounded-full shadow-md">
                <SiMongodb size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                MongoDB
              </div>
            </div>

            <div className="relative group">
              <div className="text-blue-400 bg-white p-4 rounded-full shadow-md">
                <SiMysql size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                MySQL
              </div>
            </div>

            <div className="relative group">
              <div className="text-orange-500 bg-white p-4 rounded-full shadow-md">
                <SiPostman size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                Postman
              </div>
            </div>

            <div className="relative group">
              <div className="text-yellow-500 bg-white p-4 rounded-full shadow-md">
              <IoLogoFirebase size={25} />              
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                Zustand
              </div>
            </div>

            <div className="relative group">
              <div className="text-black bg-white p-4 rounded-full shadow-md">
                <SiGithub size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                GitHub
              </div>
            </div>

            {/* <div className="relative group">
              <div className="text-purple-700 bg-white p-4 rounded-full shadow-md">
                <SiThreejs size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                Three.js
              </div>
            </div> */}
          </div>

          <div className="flex flex-row space-x-4">
            <div className="relative group">
              <div className="text-indigo-500 bg-white p-4 rounded-full shadow-md">
                <FaGitAlt size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                Git
              </div>
            </div>

            <div className="relative group">
              <div className="text-black bg-white p-4 rounded-full shadow-md">
                <TbBrandThreejs size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                Threejs
              </div>
            </div>

            <div className="relative group">
              <div className="text-gray-800 bg-white p-4 rounded-full shadow-md">
                <FcLinux size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                Linux
              </div>
            </div>

            <div className="relative group">
              <div className="text-red-600 bg-white p-4 rounded-full shadow-md">
                <DiJava size={25} />
              </div>
              <div className="absolute transform -translate-y-[6%] bottom-1/2 mb-8 hidden group-hover:block text-center text-sm bg-gray-800 text-white p-2 rounded">
                Java
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        className="space-y-4 text-lg text-start mt-4"
      >
        <p>
          <span role="img" aria-label="laptop" className="mr-2">🗄️</span>
          Working with modern databases like MongoDB and MySQL for efficient data storage
        </p>
        <p>
          <span role="img" aria-label="tools" className="mr-2">🔧</span>
          Using tools like Postman and GitHub to streamline development and collaboration
        </p>
        <p>
          <span role="img" aria-label="gear" className="mr-2">🌐</span>
          Integrating cutting-edge technologies such as Three.js and Zustand for rich user experiences
        </p>
      </motion.div>
    </div>
    </div>
  )
}

export default Skills
