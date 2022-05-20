import React from 'react';
import '../style/style.css';

interface CardType {
    img:string
    title:string
    description:string
}

export const Card = (props:CardType) => {
    return(
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt="salad"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">レシピ</button>
        </div>
    ) 
}