import "react";
import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ children }) {
    return <div className="card">{children}</div>;
}

export default Card;
