import React from "react";
import watchI from "../images/watchshowscreenshot.png"
import weatherI from "../images/weatherss.png"
import passwordI from "../images/passwordss.png"
import codeI from "../images/codess.png"

function Project(props){
    return(<>
        <div className="card col-12 col-lg-6">
            <a className="atags ptitle" href={props.deployed} target="_blank" rel="noreferrer">{props.name}</a>
            {props.name === "Watch Show" ? <img className="card-img-top" src={watchI} alt="project"/> : null}
            {props.name === "Weather Dashboard" ? <img className="card-img-top" src={weatherI} alt="project"/> : null}
            {props.name === "Password Challenge" ? <img className="card-img-top" src={passwordI} alt="project"/> : null}
            {props.name === "Code Quiz" ? <img className="card-img-top" src={codeI} alt="project"/> : null}
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
                <a className="atags" href={props.repo} target="_blank" rel="noreferrer">Repo</a>
            </div>
        </div>
    </>)
};

export default Project;