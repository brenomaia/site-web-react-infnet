const Checkbox = ({ label, checked, onChange, id }) => {
    return (
        <div className="checkbox-div">
            <input type="checkbox" checked={checked} label={label} onChange={() => onChange()} id={id}></input>
            {label && (
                <label htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    )
};

export default Checkbox;