import React from "react";

function Navigation(props){
    return(<>
        <nav className="navbar row justify-content-end">
                <a href="#portfolio"
                className="nav-link col-2 col-lg-1"
                onClick={()=> props.setPage("Portfolio")}
                >Portfolio</a>
                <a href="#aboutme"
                className="nav-link col-2 col-lg-1"
                onClick={()=> props.setPage("About Me")}
                >About Me</a>
                <a href="#resume"
                className="nav-link col-2 col-lg-1"
                onClick={()=> props.setPage("Resume")}
                >Resume</a>
                <a href="#contact"
                className="nav-link col-2 col-lg-1"
                onClick={()=> props.setPage("Contact")}
                >Contact</a>
        </nav>
    </>)
};

export default Navigation;