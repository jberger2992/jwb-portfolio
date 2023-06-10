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
    <div className='container'>
    <Header/>
    <Navigation page={page} setPage={setPage}/>
    <main>
    {displayPage()}
    </main>
    <Footer/>
    </div>
    </>)
}

export default Page;