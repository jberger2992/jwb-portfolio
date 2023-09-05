import React from "react";
import Project from "./Project";

function Portfolio(){

const projects = [
    {
        name:"Resonance",
        deployed:"https://jberger2992.github.io/resonance/",
        desc:"Helpful tools for the MMO, ESO.",
        repo:"https://github.com/jberger2992/resonance"
    },
    {
        name:"Chronicles of Adventure",
        deployed:"https://chronicles-of-adventure.netlify.app/",
        desc:"World and adventure building platform.",
        repo:"https://github.com/Citlalli091/chronicles-of-adventure"
    },
    {
        name:"Fun Particles",
        deployed:"https://jberger2992.github.io/fun-particles/",
        desc:"Customizable effects using tsParticles.",
        repo:"https://github.com/jberger2992/fun-particles"
    },
    {
        name:"Watch-Show",
        deployed:"https://jberger2992.github.io/watch-show/",
        desc:"Uses APIs to search for shows with relevant streaming info.",
        repo:"https://github.com/jberger2992/watch-show"
    },
]

    return(<>
        <div className="text-center">
        <h2>Portfolio</h2>
        </div>
        <div className="row justify-content-center">
            {projects.map(proj=><Project key={proj.name} name={proj.name} deployed={proj.deployed} desc={proj.desc} repo={proj.repo}/>)}
        </div>
    </>)
};

export default Portfolio;