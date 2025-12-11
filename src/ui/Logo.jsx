import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="h-12 w-auto px-11 py-6">
      <NavLink to="/">
        <img src="/logo-light.png" alt="The wild oasis" />
      </NavLink>
    </div>
  );
}

export default Logo;
