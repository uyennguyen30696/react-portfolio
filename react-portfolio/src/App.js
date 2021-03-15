import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllPages from "./pages/AllPages";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <AllPages />
        </Router>
    );
};

export default App;
