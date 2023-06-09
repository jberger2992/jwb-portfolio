import React from "react";

function Project(props){
    return(<>
        <div>
            <h3>{props.name}</h3>
            <a href={props.deployed} target="_blank" rel="noreferrer">Link</a>
            <br />
            <a href={props.repo} target="_blank" rel="noreferrer">Repo</a>
        </div>
    </>)
};

export default Project;