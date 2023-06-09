import React from "react";

function Navigation(props){
    return(<>
        <ul className="nav">
            <li>
                <a href="#portfolio"
                onClick={()=> props.setPage("Portfolio")}
                >Portfolio</a>
            </li>
            <li>
                <a href="#aboutme"
                onClick={()=> props.setPage("About Me")}
                >About Me</a>
            </li>
            <li>
                <a href="#resume"
                onClick={()=> props.setPage("Resume")}
                >Resume</a>
            </li>
            <li>
                <a href="#contact"
                onClick={()=> props.setPage("Contact")}
                >Contact</a>
            </li>
        </ul>
    </>)
};

export default Navigation;