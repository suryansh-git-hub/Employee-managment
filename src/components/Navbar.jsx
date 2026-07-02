import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import authApi from "../api/authApi";

function Navbar() {
  const navigate = useNavigate();

  const { theme, toggleTheme } =
    useContext(ThemeContext);



  const handleLogout = async () => {
  try {
    await authApi.post("/logout");

    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div
      className={`
        flex justify-between items-center
        px-8 py-4 border-b
        ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-zinc-800 border-zinc-700"
        }
      `}
    >
      <h2 className="text-xl md:text-3xl font-bold whitespace-nowrap">
        Employee Dashboard
      </h2>

      <div className="flex items-center gap-4">
       

        <button
          onClick={toggleTheme}
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-lg
            bg-blue-600
            text-white
            hover:bg-blue-700
            transition
          "
        >
          {theme === "light" ? (
            <>
              <MdDarkMode />
              Dark Mode
            </>
          ) : (
            <>
              <MdLightMode />
              Light Mode
            </>
          )}
        </button>

        <button
          onClick={handleLogout}
          className="
            px-4 py-2
            rounded-lg
            bg-red-500
            text-white
            hover:bg-red-600
            transition
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;