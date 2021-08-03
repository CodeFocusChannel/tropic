import React, { Fragment } from "react";
import Locations from "../components/Locations/Locations";
import useScrollToTop from "../hooks/useScrollToTop";

const LocationsPage = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Locations page={true} />
        </Fragment>
    );
};

export default LocationsPage;
