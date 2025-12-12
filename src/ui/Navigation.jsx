import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiCalendarDays,
  HiOutlineHomeModern,
  HiCog6Tooth,
  HiUsers,
} from "react-icons/hi2";

function Navigation() {
  const navigation = [
    { name: "Home", href: "/", icon: <HiOutlineHome /> },
    { name: "Bookings", href: "bookings", icon: <HiCalendarDays /> },
    { name: "Cabins", href: "cabins", icon: <HiOutlineHomeModern /> },
    { name: "Users", href: "users", icon: <HiUsers /> },
    { name: "Settings", href: "settings", icon: <HiCog6Tooth /> },
  ];
  return (
    <nav className="mt-6 flex flex-col gap-2 px-5">
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className="group flex items-center gap-3 rounded-md px-4 py-2 transition hover:bg-gray-100 [&.active]:bg-gray-100"
        >
          {({ isActive }) => (
            <>
              <span
                className={`text-xl transition ${isActive ? "text-blue-700" : "text-gray-700 group-hover:text-blue-500"} `}
              >
                {item.icon}
              </span>

              <span
                className={`text-sm ${isActive ? "text-gray-900" : "text-gray-500"}`}
              >
                {item.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
