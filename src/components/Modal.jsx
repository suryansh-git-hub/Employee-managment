function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "500px",
          margin: "100px auto",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <button onClick={onClose}>
          Close
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
