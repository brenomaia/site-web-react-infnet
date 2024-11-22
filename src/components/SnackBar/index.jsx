import { useEffect } from "react";
import "./snackbar.css";

const Snackbar = ({ message, isOpen, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <div className={`snackbar ${isOpen ? "snackbar-visible" : ""}`}>
      {message}
      <button className="snackbar-close" onClick={onClose} aria-label="Close">X</button>
    </div>
  );
};

export default Snackbar;
