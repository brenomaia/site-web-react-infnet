// import "./box.css";

const Box = ({ children, ...props }) => {
  const style = {
    ...props.style, // Allow additional inline styles to be passed
  };

  return (
    <div className={`box`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Box;