import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

function GreetingText() {
    return (
        <article id="greeting-container">
            <section id="text-box">
                <div id="typewriter-wrapper">
                    <h1>Hello! I'm Uyen Nguyen</h1>
                    <h5>Full Stack Developer</h5>
                    <br></br>
                    <div id="flex-box">
                        <div id="welcome-wrapper">
                            <h5 id="welcome-text">Welcome to my portfolio</h5>
                        </div>
                    </div>
                </div>
                <button id="arrow-button">
                    <span>Explore</span>
                    <br></br>
                    <span><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
                </button>
            </section>
            <div id="bottom-box"></div>
        </article>
    );
};

export default GreetingText;
