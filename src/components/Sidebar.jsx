import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


function Sidebar() {
  const { theme } = useContext(ThemeContext);

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  return (
    <div
      className={`
        w-20 md:w-64
        h-screen
        sticky top-0
        flex flex-col
        p-4 md:p-6
        border-r
        ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-zinc-800 border-zinc-700"
        }
      `}
    >
      {/* Logo */}
      <h2
        className="
          text-xl
          md:text-3xl
          font-bold
          mb-10
          text-center
          md:text-left
        "
      >
        EMS
      </h2>

      {/* Navigation */}
      <div className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`
              }
            >
              <MdDashboard size={22} />
              <span className="hidden md:block">
                Dashboard
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`
              }
            >
              <FaUsers size={18} />
              <span className="hidden md:block">
                Employees
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      

        <div
          className={`
            p-3
            rounded-lg
            text-center
            ${
              theme === "light"
                ? "bg-gray-100"
                : "bg-zinc-700"
            }
          `}
        >
          <p className="text-xs text-gray-500">
            Logged in as
          </p>

          <p className="font-semibold">
            {user?.name}
          </p>
        </div>
      
    </div>
  );
}

export default Sidebar;