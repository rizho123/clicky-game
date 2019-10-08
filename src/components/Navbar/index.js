import React from "react";
import "./style.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li>
                <a href="/">Clicky Game</a>
            </li>
            <li className={props.message.indexOf("incorrectly") !== -1 ? "desc-incorrect":props.message.indexOf("correctly") !== -1 ? "desc-correct":"desc-normal"}>
                {props.message}
            </li>
            <li className="scoreboard">
                Score: <span className="currentScore">{props.currentScore}</span> | Top Score: <span className="topScore">{props.topScore}</span>
            </li>
        </ul>
    </div>
)

export default Navbar;