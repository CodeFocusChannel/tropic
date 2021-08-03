import React from "react";
import LeafSVG from "./../../assets/LeafSVG";

import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <a href="/" className={classes.logo}>
            <LeafSVG fillColor={"white"} />
            <span>Tropic</span>
        </a>
    );
};

export default Logo;
