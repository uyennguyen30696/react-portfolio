import React from "react";
import MyImg from "./images/profile.png";

function Bio() {
    return (
        <section id="main-bio">
            <img id="uyen-image" src={MyImg} alt="Uyen Nguyen Profile"></img>

            <p id="bio">
                <strong id="welcome">Welcome to my personal website!</strong>
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

                <strong>Languages and Technologies</strong>
                <br></br>
                Javascript
                <br></br>
                Proficient in HTML5, CSS, jQuery, Bootstrap, Progressive Web Application (PWA), React.js
                <br></br>
                Proficient in Express.js, Node.js, Passport-jwt
                <br></br>
                Version control &amp; deployment: Visual Studio, Git/GitHub, Heroku
                <br></br>
                Databases: SQL, MongoDB, Sequelize
        </p>
        </section>
    );
};

export default Bio;
