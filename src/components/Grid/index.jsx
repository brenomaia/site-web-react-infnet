import "./grid.css"

const Grid = ({ children, columns = "1fr 1fr 1fr", gap = "32px", className = "" }) => {
    const style = {
        display: "grid",
        gridTemplateColumns: columns,
        gap: gap,
      };    

    return (
        <div className={`grid ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Grid;