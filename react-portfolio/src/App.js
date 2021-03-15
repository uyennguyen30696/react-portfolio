import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import AllPages from "./pages/AllPages";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <AllPages />
            </div>
        </Router>
    );
};

export default App;
