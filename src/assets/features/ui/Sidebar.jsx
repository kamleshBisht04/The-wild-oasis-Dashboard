import { NavLink } from "react-router-dom";
import Logo from "./Logo";

import {
  HiHome,
  HiUser,
  HiCog,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";

function Sidebar() {
  const links = [
    { name: "Home", to: "/", icon: <HiHome className="text-xl" /> },
    { name: "Bookings", to: "/bookings", icon: <HiUser className="text-xl" /> },
    {
      name: "Cabins",
      to: "/cabins",
      icon: <HiOutlineBuildingStorefront className="text-xl" />,
    },
    { name: "Users", to: "/users", icon: <HiUser className="text-xl" /> },
    { name: "Settings", to: "/settings", icon: <HiCog className="text-xl" /> },
  ];

  const linkClasses =
    "flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 font-semibold";

  return (
    <>
      <Logo />
      <aside className="mt-20 h-screen w-auto px-1">
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? "bg-gray-300" : ""}`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
