import { GrProjects } from "react-icons/gr";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="h-auto w-auto  bg-[#2c5364] flex flex-col justify-center items-center">
      <div className="h-[200px] w-auto md:w-screen flex flex-col justify-center items-start gap-4 px-40">
        <div className="text-2xl shadow-lg text-green-700 font-semibold flex flex-row text-start w-fit justify-start py-2 px-8 bg-white items-center gap-2 rounded-lg">
          <GrProjects color="black" />
          <span className="text-black">Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {/* Project 1 */}
        <motion.div
          className="h-[350px] w-auto md:w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] bg-gray-100 flex flex-col rounded-lg mb-4 overflow-hidden">
            <img src="/safespace.png" alt="" />
          </div>
          <h2 className=" text-md md:text-lg font-semibold text-gray-800 text-start">Safe Space: Community safety platform</h2>
          <p className="text-xs md:text-sm text-gray-600 text-start">
Safe Space is a community safety platform that enables real-time incident reporting, verification, and visualization through interactive maps and heatmaps. Built with Next.js, MongoDB, NextAuth, Node.js, Express.js, Leaflet, and OpenStreetMap, it helps communities track and respond to safety concerns effectively          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
            <a href="https://safe-space-hub.vercel.app/" target="_blank"
          rel="noopener noreferrer" className="text-white bg-black py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600 transition-all duration-300 ease-in-out">
              <FaExternalLinkAlt className=" text-sm md:text-lg" /> <span className=" ">Demo</span>
            </a>
            <a href="https://github.com/vivekbeast/" target="_blank"
          rel="noopener noreferrer" className="bg-black text-white py-1 text-center flex justify-center items-center px-4 rounded">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="h-[350px] w-auto md:w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] bg-gray-100 flex flex-col overflow-hidden rounded-lg mb-4">
            <img src="/Bhagya.png" alt="" />
          </div>
          <h2 className="text-md md:text-lg font-semibold text-gray-800 text-start">Bhagya : E-commerce clothing site</h2>
          <p className="text-xs md:text-sm text-gray-600 text-start">
            Bhagya is a sleek e-commerce clothing site built with React and TailwindCSS, featuring smooth animations and fast performance with Zustand. It offers an intuitive shopping experience with dynamic catalogs and personalized recommendations.
          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
            <a href="https://bhagya-clothing.netlify.app/" target="_blank"
          rel="noopener noreferrer" className="text-white bg-black py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600 transition-all duration-300 ease-in-out">
              <FaExternalLinkAlt className=" text-sm md:text-lg" /> <span className=" ">Demo</span>
            </a>
            <a href="https://github.com/vivekbeast/Bhagya" target="_blank"
          rel="noopener noreferrer" className="bg-black text-white py-1 text-center flex justify-center items-center px-4 rounded">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="h-[350px] w-auto md:w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] bg-gray-100 flex flex-col rounded-lg mb-4 overflow-hidden">
            <img src="/syntax.png" alt="" className=" h-full w-full" />
          </div>
          <h2 className="text-md md:text-lg font-semibold text-gray-800 text-start">Skill Society</h2>
          <p className="text-xs md:text-sm text-gray-600 text-start">
            Skill Society is a community-driven tech group focused on coding, innovation, and development. It provides a platform for developers to collaborate, learn, and grow through workshops, hackathons, and discussions on emerging technologies.
          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
           <a href="https://skillsociety.vercel.app/" target="_blank"
          rel="noopener noreferrer" className="text-white bg-black py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600 transition-all duration-300 ease-in-out">
              <FaExternalLinkAlt className=" text-sm md:text-lg" /> <span className=" ">Demo</span>
            </a>
            {/* <button className="bg-black text-white py-1 px-4 rounded">
              <FaGithub />
            </button> */}
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          className="h-[350px] w-auto md:w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] overflow-hidden bg-gray-100 flex flex-col rounded-lg mb-4">
            <img src="/iphone.png" alt="" />
          </div>
          <h2 className="text-md md:text-lg font-semibold text-gray-800 text-start">3D iPhone Clone </h2>
          <p className=" text-xs md:text-sm text-gray-600 text-start">
            The 3D iPhone Clone Website is an interactive platform that replicates the sleek design of an iPhone using Three.js for 3D rendering. Users can explore a lifelike, dynamic 3D model of the iPhone, rotating and interacting with it seamlessly, offering an engaging and immersive experience.
          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
            <a href="https://apple3d-site.netlify.app/" target="_blank"
          rel="noopener noreferrer" className="text-white bg-black  py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600 transition-all duration-300 ease-in-out">
              <FaExternalLinkAlt className=" text-sm md:text-lg" /> <span className=" ">Demo</span>
            </a>
            <a href="https://github.com/vivekbeast/iPhoneClone3D" target="_blank"
          rel="noopener noreferrer" className="bg-black text-white py-1 text-center flex justify-center items-center px-4 rounded">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      {/* See More Button */}
      <div className="mt-8 z-10  w-auto">
        <a href="https://github.com/vivekbeast" target="_blank"
          rel="noopener noreferrer" className="bg-white text-gray-800 py-2 px-6 rounded-lg shadow hover:text-gray-900">
          See More
        </a>
      </div>
    </div>
  );
};

export default Projects;
