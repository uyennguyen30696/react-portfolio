import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import GitHubImg from "./images/github_logo.png";
import LinkedInImg from "./images/linkedin_logo.jpg";

function ContactBody() {
    const location = useLocation();
    return (
        <div>
            <section className="connect-with-me-wrapper">
                <h2>Connect with me</h2>
                <div className="connect-with-me row">
                    <div className="icon col-6">
                        <Link to="https://github.com/uyennguyen30696" className={location.pathname = ""}
                            target="_blank"><span><img id="img-github" src={GitHubImg} alt="GitHub"></img></span>
                        </Link>
                    </div>

                    <div className="icon col-6">
                        <Link to="https://www.linkedin.com/in/uyen-nguyen-85584a16b/" className={location.pathname = ""}
                            target="_blank"><span><img id="img-linkedin" src={LinkedInImg} alt="GitHub"></img></span>
                        </Link>
                    </div>
                </div>
                <br></br>
                <hr className="hr"></hr>
            </section>
        </div>
    );
};

export default ContactBody;
