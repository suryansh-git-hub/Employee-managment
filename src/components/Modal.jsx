import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Modal({ isOpen, onClose, children }) {

  
  const { theme } = useContext(ThemeContext);
  
  if (!isOpen) return null;
  

  return (
    <div
      className="
        fixed inset-0
        bg-black/60
        backdrop-blur-sm
        flex items-center justify-center
        z-50
      "
    >
      <div
        className={`
          ${
  theme === "light"
    ? "bg-white"
    : "bg-zinc-900 text-white"
}
          rounded-2xl
          shadow-2xl
          w-full
          max-w-lg
          p-6
          mx-4
          relative
        `}
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-gray-500
            hover:text-red-500
            text-xl
          "
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;