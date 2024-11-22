import "./fab.css";

const Fab = ({ onClick, label }) => {
    return (
        <button className="fab" onClick={onClick}>{label}</button>
    )
}

export default Fab;