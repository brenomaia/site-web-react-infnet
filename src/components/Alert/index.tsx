import "./alert.css";

interface AlertProps {
  onClose?: () => void;
  message: string;
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