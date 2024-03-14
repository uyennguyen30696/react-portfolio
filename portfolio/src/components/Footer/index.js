import React from "react";
import "./style.css";

// Import icons
import reactIcon from "../../images/icons/react.png"; // https://www.flaticon.com/free-icon/science_10826338?term=react&page=1&position=12&origin=search&related_id=10826338
import javascriptIcon from "../../images/icons/js.png"; // https://www.flaticon.com/free-icon/js_5968292?term=javascript&page=1&position=3&origin=search&related_id=5968292
import htmlIcon from "../../images/icons/html-5.png"; // https://www.flaticon.com/free-icon/html-5_5968267?term=html&page=1&position=3&origin=search&related_id=5968267
import cssIcon from "../../images/icons/css-3.png"; // https://www.flaticon.com/free-icon/css-3_5968242?term=css&page=1&position=4&origin=search&related_id=5968242

const Footer = () => {
    return (
        <footer>
            <section id="extra-info">
                <div id="built-with">
                    <p>Built with</p>
                    <div className="icons-container">
                        <p><a href="https://react.dev/" rel="noreferrer" target="_blank"><img src={reactIcon} alt="React.js" className="icon" /></a></p>
                        <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer" target="_blank"><img src={javascriptIcon} alt="Javascript" className="icon" /></a></p>
                        <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noreferrer" target="_blank"><img src={htmlIcon} alt="HTML" className="icon" /></a></p>
                        <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noreferrer" target="_blank"><img src={cssIcon} alt="CSS" className="icon" /></a></p>
                    </div>
                </div>
            </section>
            <p id="made-by">Made by Uyen with ❤️</p>
        </footer>
    );
};

export default Footer;