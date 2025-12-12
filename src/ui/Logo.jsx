import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="px-6 py-4">
      <NavLink to="/">
        <img
          src="/logo-light.png"
          alt="The wild oasis"
          className="w-32 h-auto"
        />
      </NavLink>
    </div>
  );
}

export default Logo;
