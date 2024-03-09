import React, { useEffect, useState } from "react";
import "./style.css";
import downArrow from "../../images/icons/down-arrow.png"; // https://www.flaticon.com/free-icon/down-arrow_2985149?term=down+arrow&page=1&position=13&origin=tag&related_id=2985149

const GreetingText = () => {
    const [welcomeText, setWelcomeText] = useState("");
    const text = "  Welcome to my portfolio! ";
    let index = 0;

    // Add type-write effect ot the welcome text
    useEffect(() => {
        const typeWriter = () => {
            if (index < text.length) {
                setWelcomeText(prevText => prevText + text.charAt(index));
                index++;

                setTimeout(typeWriter, 100); // Typing speed at 100 milliseconds (0.1 seconds)
            }
        };

        const timer = setTimeout(() => {
            typeWriter();
        }, 1000); // Delay the typewriter effect by 1000 milliseconds (1 second) after the page loaded

        return () => clearTimeout(timer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div id="greeting-wrapper">
                <div id="text-container">
                    <div>
                        <h1>Hello! I'm Uyen</h1>
                        <h3>Science by day, Web Dev by night</h3>
                        <div id="flex-box">
                            <h4 id="welcome-text">{welcomeText}<span className="cursor"></span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id="arrow-button-wrapper">
                <a href="#projects-full-stack">
                    <button id="arrow-button">
                        <img src={downArrow} alt="Down Arrow" className="arrow-icon" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default GreetingText;
