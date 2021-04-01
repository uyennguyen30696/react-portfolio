import React from "react";
import "./style.css";
import MyImg from "../../images/profile.png";

function Bio() {
    return (
        <article id="bio-container">
            <div id="image-wrapper">
                <img id="uyen-image" src={MyImg} alt="Uyen Nguyen Profile"></img>
            </div>
            <section id="main-bio">
                <p id="bio">
                    <strong id="first-title">Welcome to my personal website!</strong>
                    <br></br><br></br>
                        I'm a junior full stack web developer transitioning from Biochemistry background. I fall in love with coding
                        and have been
                        practicing everyday since my very first line of code. I'm attending coding bootcamp at UC Davis Extension,
                        and have been working on exciting projects using modern technologies.
                        <br></br>
                        Check out my repositoties on Github to see what I have been working on.
                        <br></br>
                        Connect with me on LinkedIn, or email me at udnguyen@ucsd.edu if you have any question.
                    <br></br><br></br>

                    <strong id="second-title">Languages and Technologies</strong>
                    <br></br><br></br>
                        Javascript
                        <br></br>
                        MERN stack - MongoDB, Express, React.js, Node.js
                        <br></br>
                        Proficient in HTML5, CSS, jQuery, Bootstrap, Progressive Web Application (PWA)
                        <br></br>
                        Proficient in Express.js, Node.js, Passport-jwt
                        <br></br>
                        Version control &amp; deployment: Visual Studio, Git/GitHub, Heroku
                        <br></br>
                        Databases: SQL, MongoDB, Sequelize
                </p>
            </section>
        </article>
    );
};

export default Bio;
