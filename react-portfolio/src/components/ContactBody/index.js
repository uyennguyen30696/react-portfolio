import React from "react";
import { Link, useLocation } from "react-router-dom";
import GitHubImg from "./images/github_logo.png";
import LinkedInImg from "./images/linkedin_logo.jpg";
import { Form, Button } from "react-bootstrap";

function ContactBody() {
    const location = useLocation();
    return (
        <div>
            <section className="connect-with-me-wrapper">
                <h2>Connect with me</h2>
                <div classNameName="connect-with-me row">
                    <div className="icon col-6">
                        <Link to="https://github.com/uyennguyen30696" className={location.pathname = ""}
                            target="_blank"><span><img src={GitHubImg} alt="GitHub"></img></span>
                        </Link>
                    </div>

                    <div className="icon col-6">
                        <Link to="https://www.linkedin.com/in/uyen-nguyen-85584a16b/" className={location.pathname = ""}
                            target="_blank"><span><img src={LinkedInImg} alt="GitHub"></img></span>
                        </Link>
                    </div>
                </div>
                <br></br>
                <hr className="hr"></hr>
            </section>

            <section className="container-contact-box">
                <div className="contact-title">
                    <h2>Let's keep in touch</h2>
                </div>
                <div className="contact-box">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Message Subject</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Send
                </Button>
                    </Form>
                </div>
            </section>
        </div>
    );
};

export default ContactBody;
