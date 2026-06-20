import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

function Sidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`
        w-64 min-h-screen p-6 border-r
        ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-zinc-800 border-zinc-700"
        }
      `}
    >
      <h2 className="text-3xl font-bold mb-10">
        EMS
      </h2>

      <ul className="space-y-4">
        <li>
          <Link
            to="/dashboard"
            className={`
              flex items-center gap-3
              p-3 rounded-lg
              transition duration-200
              ${
                theme === "light"
                  ? "hover:bg-gray-100"
                  : "hover:bg-zinc-700"
              }
            `}
          >
            <MdDashboard size={22} />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link
            to="/employees"
            className={`
              flex items-center gap-3
              p-3 rounded-lg
              transition duration-200
              ${
                theme === "light"
                  ? "hover:bg-gray-100"
                  : "hover:bg-zinc-700"
              }
            `}
          >
            <FaUsers size={18} />
            <span>Employees</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;