import React from "react";
import Project from "./Project";

function Portfolio(){

const projects = [
    {
        name:"Watch Show",
        deployed:"https://jberger2992.github.io/watch-show/",
        desc:"Uses APIs to search for shows with relevant streaming info.",
        repo:"https://github.com/jberger2992/watch-show"
    },
    {
        name:"Weather Dashboard",
        deployed:"https://jberger2992.github.io/weather-dashboard/",
        desc:"Uses an API to search a forcast for a given location.",
        repo:"https://github.com/jberger2992/weather-dashboard"
    },
    {
        name:"Code Quiz",
        deployed:"https://jberger2992.github.io/code-quiz/",
        desc:"A simple coding quiz with timer related scoring.",
        repo:"https://github.com/jberger2992/code-quiz"
    },
    {
        name:"Password Challenge",
        deployed:"https://jberger2992.github.io/password-challenge/",
        desc:"A simple password generator.",
        repo:"https://github.com/jberger2992/password-challenge"
    },
]

    return(<>
        <div className="text-center">
        <h2>Portfolio</h2>
        </div>
        <div className="row">
            {projects.map(proj=><Project key={proj.name} name={proj.name} deployed={proj.deployed} desc={proj.desc} repo={proj.repo}/>)}
        </div>
    </>)
};

export default Portfolio;