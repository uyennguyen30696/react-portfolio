import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";
import GitHubImg from "./images/github_logo.png";
import LinkedInImg from "./images/linkedin_logo.jpg";

function ContactBody() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updateMessage = (e) => {
        setMessage(e.target.value)
    };

    function sendEmail(e) {
        e.preventDefault();

        if (name && email && message) {
            emailjs.sendForm("service_o40nqnb", "template_60m1gj8", e.target, "user_qVnfI1mR3ENb2i9IQtClH")
                .then((result) => {
                    console.log(result.text);
                    alert("Thank you! Your message was successfully sent.");
                }, (error) => {
                    console.log(error.text);
                    alert("Sorry, an error occurred.");
                });
        } else {
            alert("Please enter valid required information");
        };
        
        e.target.reset();
    };

    return (
        <div className="contact-container">

            <section id="contact-form-section">
                <h3 className="bold-text" id="keep-in-touch">Keep in touch</h3>
                <div className="form-container">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div className="form-input">
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                onChange={(e) => updateName(e)}
                            />
                        </div>
                        <div className="form-input">
                            <input
                                type="text"
                                placeholder="Your email"
                                name="email"
                                onChange={(e) => updateEmail(e)}
                            />
                        </div>
                        <div className="form-input">
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                            />
                        </div>
                        <div className="form-input">
                            <textarea
                                placeholder="Message"
                                rows="7"
                                name="message"
                                onChange={(e) => updateMessage(e)}
                            >
                            </textarea>
                        </div>
                        <button
                            id="send-button"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>

            <section id="connect-with-me-wrapper">
                <h2 className="bold-text">Connect with me</h2>
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
                <h2 className="bold-text">Thank you for visiting my portfolio!</h2>
                <br></br>
                <p>Don't hesitate to email me at <strong>udnguyen@ucsd.edu</strong> with any question you may have or simply just want to chat.
                    <br></br>
                    I usually check my email very often. If I haven't replied to you yet, that probably means I'm busy travelling in the middle of nowhere, but I will get back to you as soon as possible.
                </p>
            </section>
        </div>
    );
};

export default ContactBody;
