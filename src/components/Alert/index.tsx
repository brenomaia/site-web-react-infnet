import "./alert.css";

interface AlertProps {
  onClose?: () => void; // Optional callback for closing the alert
  message: string;      // The message to display in the alert
}

const Alert: React.FC<AlertProps> = ({ onClose, message }) => {
  return (
    <div className="alert">
      <div>
        <p>{message}</p>
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>  
      )}
    </div>
  );
};

export default Alert;