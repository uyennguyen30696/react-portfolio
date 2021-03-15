import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPages from "./pages/AllPages";
import NoMatch from "./pages/NoMatch";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={["/", "/react-portfolio"]} component={AllPages} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;
