import React from "react";
import "./style.css";

const Title = props => (
    <div className="titleContainer jumbotron">
        <h1 className="title">Clicky Game</h1>
        <p className="description">Click on a different image each time to get 1 point. Game ends if you click on an image that you previously clicked!</p>
    </div>
);

export default Title;