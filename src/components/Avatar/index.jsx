import "./avatar.css"

const Avatar = ( { imgPath, name }) => {
    return (
        <div className="avatar">
            <p>{name}</p>
            <img src={imgPath} />
        </div>
    )
}

export default Avatar;