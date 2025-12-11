import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMiniEnvelope } from "react-icons/hi2";

function Social() {
  return (
    <div className="mt-18 ml-2 flex items-center justify-center gap-4 rounded bg-gray-100 py-5">
      <div className="flex flex-col items-center">
        <NavLink
          to="https://github.com"
          className="transition-all duration-200 hover:scale-110 hover:text-blue-900"
        >
          <FaGithub className="text-xl" />
        </NavLink>
        <span className="mt-1 text-sm">Github</span>
      </div>

      <div className="flex flex-col items-center">
        <NavLink
          to="mailto:someone@gmail.com"
          className="transition-all duration-200 hover:scale-110 hover:text-blue-900"
        >
          <HiMiniEnvelope className="text-xl" />
        </NavLink>
        <span className="mt-1 text-sm">Gmail</span>
      </div>

      <div className="flex flex-col items-center">
        <NavLink
          to="https://linkedin.com"
          className="transition-all duration-200 hover:scale-110 hover:text-blue-900"
        >
          <FaLinkedin className="text-xl" />
        </NavLink>
        <span className="mt-1 text-sm">LinkedIn</span>
      </div>
    </div>
  );
}

export default Social;
