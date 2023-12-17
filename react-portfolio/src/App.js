import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPages from "./pages/AllPages";
import NoMatch from "./pages/NoMatch";
import Resume from "./pages/Resume";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={["/", "/react-portfolio"]} component={AllPages} />
                <Route exact path={["/resume", "/pdf/Uyen Nguyen - Resume (most recent).pdf"]} component={Resume} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;
