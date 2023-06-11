import React from "react";

function Resume(){
    return(<>
        <div className="text-center">
        <h2>Resume</h2>
        </div>
        <div className="row justify-content-center">
            <div className="col-10">
        <h3>Proficiencies</h3>
        <h4>Front-End</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <h4>Back-End</h4>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
        </ul>
        <a className="atags" href="#resume">Resume Link Coming Soon</a>
        </div>
        </div>
    </>)
};

export default Resume;