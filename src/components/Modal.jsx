function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          dark:bg-zinc-800
          rounded-xl
          shadow-xl
          w-full
          max-w-lg
          p-6
          mx-4
        "
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="
             text-gray-500
    hover:text-red-500
    font-medium
    transition
            "
          >
            Close
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;