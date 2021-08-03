import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Locations />
        </Fragment>
    );
};

export default Home;
