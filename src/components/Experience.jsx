import { MdOutlineWork } from "react-icons/md";


const Experience = () => {
  return (
    <div className=" h-[600px] w-screen bg-[#98f1c3] flex flex-col justify-center items-center">
        <div className=" h-[200px] w-screen  flex flex-col justify-center items-start gap-4 px-40 ">
                <div className=" text-2xl shadow-lg text-green-700 font-semibold flex flex-row text-start w-fit justify-start py-2 px-8 bg-white items-center gap-2 rounded-lg"> <MdOutlineWork color="black"  /> <span className=" text-black">Experience</span></div> 
                {/* <h2 className=" text-lg uppercase text-green-600 w-full text-center font-medium">Enthusiastic Software Developer, eager to explore and work with every tech stack!</h2>    */}
         </div>  
      <div className=" h-[500px] w-[800px] bg-white mb-12 rounded-lg shadow-md">
        <div className="  w-full flex flex-col justify-center items-center">
            <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full shadow-2xl "><img src="/logoBlack.svg" alt="" className=" w-[130px] h-[130px] rounded-full" /></div>
  <h1 className="text-xl font-bold text-gray-800 mb-2">
    Empedance Consultancy Services
  </h1>
  <h1 className="text-lg font-semibold text-green-600 mb-1">
    Software Developer Intern
  </h1>
  <h2 className="text-sm text-gray-800">
    Sep 2024 - Dec 2024 · <span className="font-medium text-gray-800">3 months</span>
  </h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-auto">
  <p className="text-gray-700 leading-relaxed">
    Worked as a <span className="font-medium text-blue-600">Web Developer</span> to design and develop web applications using 
    <span className="text-gray-800 font-medium"> ReactJS, NodeJS, Express, Tailwind CSS, Material UI</span>, and 
    <span className="text-gray-800 font-medium"> MongoDB</span>. Built diverse and customized user interfaces with 
    <span className="text-gray-800 font-medium"> React, TypeScript</span>, and third-party UI libraries. Contributed to 
    <span className="text-blue-600 font-medium"> 5+ projects</span> across various categories, including both internal and client-facing solutions.
  </p>
</div>

      </div>
    </div>
  )
}

export default Experience
