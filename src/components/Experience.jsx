import { MdOutlineWork } from "react-icons/md";


const Experience = () => {
  return (
    <div className=" h-auto  w-auto bg-[#203A43] flex flex-col p-4 md:p-0 justify-center items-center">
        <div className=" h-[200px] w-auto md:w-screen  flex flex-col justify-center items-start gap-4 px-40 ">
                <div className=" text-2xl shadow-lg text-green-700 font-semibold flex flex-row text-start w-fit justify-start py-2 px-8 bg-white items-center gap-2 rounded-lg"> <MdOutlineWork color="black"  /> <span className=" text-black">Experience</span></div> 
                {/* <h2 className=" text-lg uppercase text-green-600 w-full text-center font-medium">Enthusiastic Software Developer, eager to explore and work with every tech stack!</h2>    */}
         </div>  
      <div className=" h-auto md:h-[500px] w-auto md:w-[800px] bg-inherit border-4 border-white mb-12 rounded-xl shadow-md">
        <div className="  w-full flex flex-col justify-center items-center">
            <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full shadow-2xl bg-white mt-4"><img src="/expert.svg" alt="" className=" w-[130px] h-[130px] rounded-full" /></div>
  <h1 className=" text-lg md:text-xl font-bold text-white mb-2">
    Expert Buddy - E-Learning Providers
  </h1>
  <h1 className=" text-md md:text-lg font-semibold text-white mb-1">
    Software Developer Intern
  </h1>
  <h2 className=" text-xs md:text-sm text-white">
    Apr 2025 - Aug 2025 · <span className="font-medium text-white">4 months</span>
  </h2>
        </div>
    <div className="p-6 text-sm md:text-lg h-[200px] rounded-lg overflow-y-scroll shadow-md mx-auto">
  <p className="text-white leading-relaxed">
    At <span className="font-medium text-green-600">Expert Buddy</span>, an 
    <span className="text-white font-medium"> EdTech platform</span>, I played a key role in designing and developing 
    multiple core features of the website. My contributions included building the complete 
    <span className="text-white font-medium"> blog module with a rich text editor</span>, creating an 
    <span className="text-white font-medium"> interactive chat-style comments system</span>, and integrating 
    <span className="text-white font-medium"> real-time API data into dynamic charts</span>. I also focused on refining the 
    <span className="text-white font-medium"> UI/UX</span>, ensuring efficient 
    <span className="text-white font-medium"> API integrations</span>, and implementing the 
    <span className="text-white font-medium"> payment gateway interface and workflow</span>. In addition to these, I contributed to 
    <span className="text-green-600 font-medium"> several other enhancements</span> across the platform, collectively strengthening 
    <span className="text-white font-medium"> usability, engagement</span>, and overall 
    <span className="text-white font-medium"> production readiness</span>.
  </p>
</div>


      </div>
      <div className=" h-auto md:h-[500px] w-auto md:w-[800px] bg-inherit border-4 border-white mb-12 rounded-xl shadow-md">
        <div className="  w-full flex flex-col justify-center items-center">
            <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full shadow-2xl bg-white mt-4"><img src="/logoBlack.svg" alt="" className=" w-[130px] h-[130px] rounded-full" /></div>
  <h1 className=" text-lg md:text-xl font-bold text-white mb-2">
    Empedance Consultancy Services
  </h1>
  <h1 className=" text-md md:text-lg font-semibold text-white mb-1">
    Software Developer Intern
  </h1>
  <h2 className=" text-xs md:text-sm text-white">
    Sep 2024 - Dec 2024 · <span className="font-medium text-white">3 months</span>
  </h2>
        </div>
        <div className="p-6 text-sm md:text-lg rounded-lg shadow-md mx-auto">
  <p className="text-white leading-relaxed">
    Worked as a <span className="font-medium text-green-600">Web Developer</span> to design and develop web applications using 
    <span className="text-white font-medium"> ReactJS, NodeJS, Express, Tailwind CSS, Material UI</span>, and 
    <span className="text-white font-medium"> MongoDB</span>. Built diverse and customized user interfaces with 
    <span className="text-white font-medium"> React, TypeScript</span>, and third-party UI libraries. Contributed to 
    <span className="text-green-600 font-medium"> 5+ projects</span> across various categories, including both internal and client-facing solutions.
  </p>
</div>

      </div>
    </div>
  )
}

export default Experience
