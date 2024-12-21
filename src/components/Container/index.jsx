import "./container.css";

const Container = ({ children, className, ...props }) => {
  return (
    <div className={className} style={props.style}>
      {children}
    </div>);
};

export default Container;