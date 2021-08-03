import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BookNow from "./pages/BookNow";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import LocationsPage from "./pages/LocationsPage";
import Pricing from "./pages/Pricing";

function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/locations">
                    <LocationsPage />
                </Route>
                <Route path="/booknow">
                    <BookNow />
                </Route>
                <Route path="/pricing">
                    <Pricing />
                </Route>
                <Route path="/learnmore">
                    <LearnMore />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default App;
