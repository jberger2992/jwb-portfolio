import React from "react";

function Project(props){
    return(<>
        <div>
            <a href={props.deployed} target="_blank" rel="noreferrer">{props.name}</a>
            <br />
            <a href={props.repo} target="_blank" rel="noreferrer">Repo</a>
        </div>
    </>)
};

export default Project;