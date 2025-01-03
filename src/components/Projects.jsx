import { GrProjects } from "react-icons/gr";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="h-auto w-screen  bg-[#e5ffd1] flex flex-col justify-center items-center">
      <div className="h-[200px] w-screen flex flex-col justify-center items-start gap-4 px-40">
        <div className="text-2xl shadow-lg text-green-700 font-semibold flex flex-row text-start w-fit justify-start py-2 px-8 bg-white items-center gap-2 rounded-lg">
          <GrProjects color="black" />
          <span className="text-black">Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-10">
        {/* Project 1 */}
        <motion.div
          className="h-[350px] w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] bg-gray-100 flex flex-col rounded-lg mb-4 overflow-hidden">
            <img src="/Workorbit.png" alt="" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 text-start">WorkOrbit : Effortless Task Management</h2>
          <p className="text-sm text-gray-600 text-start">
            WorkOrbit simplifies task management by allowing admins to assign tasks with details, monitor progress through team updates, and ensure transparency. Users access personalized pages with unique IDs to view and update task statuses, enhancing productivity and collaboration.
          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
            <a href="https://work-o2ak.vercel.app/" className="text-white bg-black py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600">
              <FaExternalLinkAlt /> <span className=" ">Demo</span>
            </a>
            <a href="https://github.com/vivekbeast/work" className="bg-black text-white py-1 px-4 rounded">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="h-[350px] w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] bg-gray-100 flex flex-col overflow-hidden rounded-lg mb-4">
            <img src="/Bhagya.png" alt="" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 text-start">Bhagya : E-commerce clothing site</h2>
          <p className="text-sm text-gray-600 text-start">
            Bhagya is a sleek e-commerce clothing site built with React and TailwindCSS, featuring smooth animations and fast performance with Zustand. It offers an intuitive shopping experience with dynamic catalogs and personalized recommendations.
          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
            <a href="https://bhagya-clothing.netlify.app/" className="text-white bg-black py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600">
              <FaExternalLinkAlt /> <span className=" ">Demo</span>
            </a>
            <a href="https://github.com/vivekbeast/Bhagya" className="bg-black text-white py-1 px-4 rounded">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="h-[350px] w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] bg-gray-100 flex flex-col rounded-lg mb-4 overflow-hidden">
            <img src="/syntax.png" alt="" className=" h-full w-full" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 text-start">Syntax Society</h2>
          <p className="text-sm text-gray-600 text-start">
            Syntax Society is a community-driven tech group focused on coding, innovation, and development. It provides a platform for developers to collaborate, learn, and grow through workshops, hackathons, and discussions on emerging technologies. (DEVELOPMENTAL PHASE)
          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
            {/* <button className="text-green-400 bg-black py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600">
              <FaExternalLinkAlt /> <span className=" font-medium">Demo</span>
            </button> */}
            {/* <button className="bg-black text-white py-1 px-4 rounded">
              <FaGithub />
            </button> */}
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          className="h-[350px] w-[500px] bg-white rounded-lg text-start shadow-md flex flex-col items-start justify-between p-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="w-full h-[250px] overflow-hidden bg-gray-100 flex flex-col rounded-lg mb-4">
            <img src="/iphone.png" alt="" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 text-start">3D iPhone Clone </h2>
          <p className="text-sm text-gray-600 text-start">
            The 3D iPhone Clone Website is an interactive platform that replicates the sleek design of an iPhone using Three.js for 3D rendering. Users can explore a lifelike, dynamic 3D model of the iPhone, rotating and interacting with it seamlessly, offering an engaging and immersive experience.
          </p>
          <div className="flex flex-row gap-4 w-full mt-4">
            <a href="https://apple3d-site.netlify.app/" className="text-white bg-black py-1 flex flex-row justify-center items-center gap-2 px-4 rounded hover:bg-green-600">
              <FaExternalLinkAlt /> <span className=" ">Demo</span>
            </a>
            <a href="https://github.com/vivekbeast/iPhoneClone3D" className="bg-black text-white py-1 px-4 rounded">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      {/* See More Button */}
      <div className="mt-8 z-10 px-40">
        <a href="https://github.com/vivekbeast" className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-900">
          See More
        </a>
      </div>
    </div>
  );
};

export default Projects;
