import React from "react";
import "./style.css";

const ImageCard = props => (
    <div className={
        props.currentScore === 0 ? "card cardEx"
        : "card"
    }>
        <div className="imageBox">
            <a onClick={() => props.selectImage(props.name)} className="imageLink">
                <img className="image" alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
)

export default ImageCard;