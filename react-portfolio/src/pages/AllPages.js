import React from "react";
import "./styling/allPages.css";
import FixedBackground from "../components/FixedBackground";
import Greeting from "./Greeting";
import Home from "./Home";
// import Portfolio from "./Portfolio";
import PortfolioFullStack from "./PortfolioFullStack";
import PortfolioFrontEnd from "./PortfolioFrontEnd";
import NavBar from "../components/NavBar";
import Contact from "./Contact";
import Footer from "../components/Footer";

import EmptySpace from "../components/EmptySpace";

function AllPages() {
    return (
        <div id="app-container">
            <div id="navbar">
                <NavBar />
            </div>
            <div id="pages">
                <FixedBackground />
            </div>
            <div className="pages">
                <Greeting />
            </div>
            <div className="pages">
                <Home />
            </div>
            <div className="pages">
                <EmptySpace />
            </div>
            {/* <div className="pages">
                <Portfolio />
            </div> */}
            <div className="pages">
                <PortfolioFullStack />
            </div>
            <div className="pages">
                <PortfolioFrontEnd />
            </div>
            <div className="pages">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default AllPages;
