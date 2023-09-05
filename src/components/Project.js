import React from "react";
import watchI from "../images/watchshowscreenshot.png"
import coaI from "../images/CoA.png"
import particlesI from "../images/funparticles.png"
import resonanceI from "../images/resonance.png"

function Project(props){
    return(<>
        <div className="card col-12 col-lg-5">
            <a className="atags ptitle" href={props.deployed} target="_blank" rel="noreferrer">{props.name}</a>
            {props.name === "Watch-Show" ? <img className="card-img-top" src={watchI} alt="project"/> : null}
            {props.name === "Chronicles of Adventure" ? <img className="card-img-top" src={coaI} alt="project"/> : null}
            {props.name === "Fun Particles" ? <img className="card-img-top" src={particlesI} alt="project"/> : null}
            {props.name === "Resonance" ? <img className="card-img-top" src={resonanceI} alt="project"/> : null}
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
                <a className="atags" href={props.repo} target="_blank" rel="noreferrer">Repo</a>
            </div>
        </div>
    </>)
};

export default Project;