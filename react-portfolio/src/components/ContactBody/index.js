import React from "react";
import "./style.css";
import GitHubImg from "./images/github_logo.png";
import LinkedInImg from "./images/linkedin_logo.jpg";

function ContactBody() {
    return (
        <div>
            <section className="connect-with-me-wrapper">
                <h2>Connect with me</h2>
                <div className="connect-with-me row">
                    <div className="icon col-6">
                        <a href="https://github.com/uyennguyen30696" rel="noreferrer"
                            target="_blank"><span><img id="img-github" src={GitHubImg} alt="GitHub"></img></span>
                        </a>
                    </div>

                    <div className="icon col-6">
                        <a href="https://www.linkedin.com/in/uyen-nguyen-85584a16b/" rel="noreferrer"
                            target="_blank"><span><img id="img-linkedin" src={LinkedInImg} alt="GitHub"></img></span>
                        </a>
                    </div>
                </div>
                <br></br>
                <hr className="hr"></hr>
                <h2>Thank you for visiting my portfolio!</h2>
                <p>Don't hesitate to email me at <strong>udnguyen@ucsd.edu</strong> with any question you may have or simply just want to chat.
                    <br></br>
                    I usually check my email very often. If I haven't replied to you yet, that probably means I'm busy travelling in the middle of nowhere, but I will get back to you as soon as possible.
                </p>
            </section>
        </div>
    );
};

export default ContactBody;
