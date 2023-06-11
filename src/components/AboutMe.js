import React from "react";
import image from "../images/326744746_709078617346308_111090430906507366_n (2).jpg"

function AboutMe(){
    return(<>
        <div className="text-center">
        <h2>About Me</h2>
        </div>
        <div className="row justify-content-center">
            <div className="col-4 col-lg-2">
                <img src={image} alt="Me"/>
            </div>
            <div className="col-8 col-lg-6">
                <p>I am a fullstack web development bootcamp student.</p>
            </div>
        </div>
    </>)
};

export default AboutMe;