import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./Button.module.scss";

const Button = ({ outline, children, onClick, to }) => {
    const history = useHistory();
    return (
        <button
            onClick={() => {
                onClick && onClick();
                history.push(to);
            }}
            className={`${classes.button} ${outline ? classes.outline : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
