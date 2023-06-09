import React from "react";
import Project from "./Project";

function Portfolio(){

const projects = [
    {
        name:"Watch Show",
        deployed:"https://jberger2992.github.io/watch-show/",
        repo:"https://github.com/jberger2992/watch-show"
    },
]

    return(<>
        <h2>Portfolio</h2>
        {projects.map(proj=><Project key={proj.name} name={proj.name} deployed={proj.deployed} repo={proj.repo}/>)}
    </>)
};

export default Portfolio;