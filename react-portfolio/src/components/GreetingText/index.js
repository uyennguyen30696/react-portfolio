import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function GreetingText() {
    return (
        <article id="greeting-container">
            <section id="text-box">
                <div id="typewriter-wrapper">
                    <h1 id="hello">Hello! I'm Uyen Nguyen</h1>
                    <br></br>
                    <h3 id="job-title">Full Stack Developer</h3>
                    <br></br>
                    <div id="flex-box">
                        <div id="welcome-wrapper">
                            <h4 id="welcome-text">Welcome to my portfolio</h4>
                        </div>
                    </div>
                </div>
                <a href="#home-page">
                    <button id="arrow-button">
                        <span>Explore</span>
                        <br></br>
                        <span id="arrow-icon"><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
                    </button>
                </a>
            </section>
            <div id="bottom-box"></div>
        </article>
    );
};

export default GreetingText;
