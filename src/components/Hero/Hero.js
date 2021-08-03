import React, { Fragment } from "react";
import Button from "./../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";

import classes from "./Hero.module.scss";

const HomePageContent = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>the tropics are waiting</h1>
            <span className={classes.hero__content__tagline}>
                Let us know when you're finished packing
            </span>
            <p className={classes.hero__content__description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae itaque ea
                ducimus, mollitia voluptate laudantium.
            </p>
            <div className={classes.hero__content__cta}>
                <Button to="/booknow">Book Now</Button>
                <Button to="/learnmore" outline>
                    Learn More
                </Button>
            </div>
        </Fragment>
    );
};

const Hero = ({ isDynmic, children }) => {
    return (
        <div className={classes.container}>
            <video
                autoPlay={false}
                muted
                loop
                className={classes.video}
                id={"video"}
                src={coverVID}
            ></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    {!isDynmic && <HomePageContent />}
                    {isDynmic && <h1 className={classes.hero__content__title}>{children}</h1>}
                </div>
            </div>
        </div>
    );
};

export default Hero;
