import React from "react";
import Iframe from "react-iframe";
import PDF from "../pdf/resume_uyen_nguyen.pdf";

function Resume() {
    return (
        <div id="resumePage">
            <Iframe 
                src={PDF} 
                title="resume"
                position="absolute"
                width="100%"
                height="100%" 
            />
        </div>
    );
};

export default Resume;
