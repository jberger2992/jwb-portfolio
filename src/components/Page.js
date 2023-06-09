import React, { useState } from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from './Resume';
import AboutMe from './AboutMe';

function Page(){

    const [page, setPage] = useState("About Me");

    const displayPage = () => {
        if (page === 'Portfolio') {
            return <Portfolio/>;
        }if (page === 'About Me') {
            return <AboutMe/>;
        }if (page === 'Resume') {
            return <Resume />;
        }if (page === "Contact"){
            return <Contact />;
        }
    };

    return(<>
    <Header/>
    <Navigation setPage={setPage}/>
    {displayPage()}
    <Footer/>
    </>)
}

export default Page;