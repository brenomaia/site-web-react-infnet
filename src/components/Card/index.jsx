import "./card.css";

const Card = ({ title, imgPath, content }) => {
    return (
        <div className="card">
            <img src={imgPath} className="card-img"/>
            <h2 className="title">{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card;