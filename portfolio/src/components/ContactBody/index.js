import React, { useRef } from "react"; 
import "./style.css";
import emailjs from 'emailjs-com';

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import paperPlaneIcon from "../../images/icons/paper-plane.png"; // https://www.flaticon.com/free-icon/paper-plane_149065?term=airplane&related_id=149065
// import gitHubIcon from "../../images/icons/github-logo.png"; // https://www.flaticon.com/free-icon/github-logo_25231 
// import gmailIcon from "../../images/icons/gmail.png"; // https://www.flaticon.com/search?word=email
// import linkedInIcon from "../../images/icons/linkedin.png"; // https://www.flaticon.com/free-icon/linkedin_174857?term=linkedin&page=1&position=15&origin=search&related_id=174857
// import youtubeIcon from "../../images/icons/youtube.png"; // https://www.flaticon.com/free-icon/youtube_174883?term=youtube&page=1&position=4&origin=search&related_id=174883
// import reactIcon from "../../images/icons/react.png"; // https://www.flaticon.com/free-icon/science_10826338?term=react&page=1&position=12&origin=search&related_id=10826338
// import javascriptIcon from "../../images/icons/js.png"; // https://www.flaticon.com/free-icon/js_5968292?term=javascript&page=1&position=3&origin=search&related_id=5968292
// import htmlIcon from "../../images/icons/html-5.png"; // https://www.flaticon.com/free-icon/html-5_5968267?term=html&page=1&position=3&origin=search&related_id=5968267
// import cssIcon from "../../images/icons/css-3.png"; // https://www.flaticon.com/free-icon/css-3_5968242?term=css&page=1&position=4&origin=search&related_id=5968242

const ContactBody = () => {
    const formRef = useRef(); // Reference for the form

    // Refer to this documentation from EmailJS: https://www.emailjs.com/docs/examples/reactjs/
    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
  
        // Use emailjs.sendForm to send the email
        emailjs
        .sendForm(
            "service_qlpnu8u", // EmailJS service ID
            "template_icb1cca", // EmailJS template ID
            formRef.current, 
            "2MAikDhmWinPDqP9P" // Public API key
        )
        .then(
            (result) => {
                console.log("Email sent successfully:", result.text);
                // Display a success message to the user
                alert("Thank you! Your message has been sent.");
            },
            (error) => {
                console.error("Error sending email:", error.text);
                // Display an error message to the user
                alert("Oops! Something went wrong. Please try again later.");
            }
        );
  
        // Reset the form after sending the email
        e.target.reset();
    };

    return (
        <section id="contact-form">
            <div className="form-container">
                <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                    <div className="form-input">
                        <div className="input-title">Your name<span className="asterisk">*</span></div>
                        <input type="text" name="name" required />
                    </div>
                    <div className="form-input">
                        <div className="input-title">Your email<span className="asterisk">*</span></div>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-input">
                        <div className="input-title">Subject<span className="asterisk">*</span></div>
                        <input type="text" name="subject" required />
                    </div>
                    <div className="form-input">
                        <div className="input-title">Message<span className="asterisk">*</span></div>
                        <textarea rows="6" name="message" required></textarea>
                    </div>
                    <div className="form-button-and-icons">
                        <button id="send-button" type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} className="paper-plane-icon" />
                        </button>
                        <div className="icons-container">
                            <div><a href="mailto:nguyenuyen30696@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" id="gmail-icon" /></a></div>
                            <div><a href="https://github.com/uyennguyen30696" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faSquareGithub} size="3x" className="contact-icon" /></a></div>
                            <div><a href="https://www.linkedin.com/in/uyen-nguyen-85584a16b/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" className="contact-icon" /></a></div>
                            <div><a href="https://www.youtube.com/channel/UCpR6U2rHHYJlGVmxQxzCAIw" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faYoutube} size="3x" className="contact-icon" id="youtube-icon" /></a></div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactBody;
