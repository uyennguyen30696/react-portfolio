import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    return (
        <HashRouter basename="/react-portfolio">
            <div>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
