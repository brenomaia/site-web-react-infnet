import "./box.css";

const Box = ({ children, padding, margin, bgColor, borderRadius, ...props }) => {
  const style = {
    padding,
    margin,
    backgroundColor: bgColor,
    borderRadius,
    ...props.style, // Allow additional inline styles to be passed
  };

  return (
    <div className={`box`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Box;