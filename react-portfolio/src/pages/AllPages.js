import React from "react";
import "./styling/allPages.css";
import Greeting from "./Greeting";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Test() {
    return (
        <div className="app-container">
            <div id="navbar">
                <NavBar />
            </div>
            <div className="pages">
                <Greeting />
            </div>
            <div className="pages">
                <Home />
            </div>
            <div className="pages">
                <Portfolio />
            </div>
            <div className="pages">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Test;
