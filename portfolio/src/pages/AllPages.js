import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/allPages.css";
import NavBar from "../components/NavBar";
import Home from "./Home";
import ProjectsFullStack from "./ProjectsFullStack";
import ProjectsFrontEnd from "./ProjectsFrontEnd";
import EmptySpace from "../components/EmptySpace";
import FixedBackground from "../components/FixedBackground";
import Contact from "./Contact";
import Footer from "../components/Footer"; 

const AllPages = () => {

    // Track whether the navbar is expanded or not
    const [isNavbarExpanded, setNavbarExpanded] = useState(false);

    const handleNavbarToggle = () => {
        setNavbarExpanded(!isNavbarExpanded);
    };

    return (
        <div>
            <div>
                <NavBar onToggle={handleNavbarToggle} />
            </div>
            {/* If navbar is expanded, the rest of the page will be blurred */}
            <div className={`pages ${isNavbarExpanded ? 'blurred' : ''}`} id="home-page">
                <Home />
            </div>
            <div className={`pages ${isNavbarExpanded ? 'blurred' : ''}`}>
                <ProjectsFullStack />
            </div>
            <div className={`pages ${isNavbarExpanded ? 'blurred' : ''}`}>
                <ProjectsFrontEnd />
            </div>
            <div className={`pages ${isNavbarExpanded ? 'blurred' : ''}`}>
                <EmptySpace />
            </div>
            <div className={`pages ${isNavbarExpanded ? 'blurred' : ''}`}>
                <FixedBackground />
            </div>
            <div className={`pages ${isNavbarExpanded ? 'blurred' : ''}`}>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AllPages;
