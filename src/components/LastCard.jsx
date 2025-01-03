import { FaGithub, FaLinkedin } from "react-icons/fa";

const LastCard = () => {
  return (
    <div id="contact" className="h-[600px] w-screen bg-gradient-to-t from-[#98f1c3] to-[#e5ffd1] flex flex-col justify-center items-center text-center py-10">
      <div className="w-full text-center mb-8 px-10">
        <h2 className="text-4xl font-semibold text-green-700 mb-4">Feel free to reach out!</h2>
        <p className="text-lg text-gray-600 mb-4">WANT TO DISCUSS A PROJECT OR SIMPLY SAY HELLO? MY INBOX IS ALWAYS OPEN.</p>
        <p className="text-lg text-gray-600 mb-4">Full Stack & Frontend Developer</p>
        <p className="text-lg text-gray-600">Bengaluru, India</p>
      </div>

      <div className="flex gap-6 justify-center mb-6">
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

      <div className="mt-8">
        <button className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 transition duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default LastCard;
