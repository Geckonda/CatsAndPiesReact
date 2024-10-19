import React from "react";

const Card = (props) => {
    return(
        <div className="card">
            <h3>{props.title}</h3>
            <p>Цена {props.price}</p>
            <button>Подробнее</button>
        </div>
    );
}
export default Card;