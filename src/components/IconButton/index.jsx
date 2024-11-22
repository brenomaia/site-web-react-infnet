import "./iconbutton.css";

const IconButton = ({ icon, onClick }) => {
  return (
    <button
      className="icon-button"
      onClick={onClick}
    >
      {icon && <span className="icon-button-icon">{icon}</span>}
    </button>
  );
};

export default IconButton;