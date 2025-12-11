import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMiniEnvelope } from "react-icons/hi2";

function Social() {
  return (
    <div className="mt-18 ml-2 flex items-center justify-center gap-4 rounded bg-gray-100 py-5">
      
      <NavLink
        to="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center transition-all duration-200  hover:text-blue-900"
      >
        <FaGithub className="text-sm text-black " />
        <span className="mt-1 text-sm">Github</span>
      </NavLink>

      <NavLink
        to="mailto:someone@gmail.com"
        className="flex flex-col items-center transition-all duration-200  hover:text-blue-900"
      >
        <HiMiniEnvelope className="text-sm text-red-700" />
        <span className="mt-1 text-sm">Gmail</span>
      </NavLink>

      <NavLink
        to="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center transition-all duration-200  hover:text-blue-900"
      >
        <FaLinkedin className="text-sm text-blue-900" />
        <span className="mt-1 text-sm">LinkedIn</span>
      </NavLink>

    </div>
  );
}

export default Social;
