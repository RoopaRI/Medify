import React from 'react';
//components
// import SearchResults from "../SearchResults/SearchResults";
import FAQ from "../FAQ/FAQ";
import AppTop from "../AppTop/AppTop";
import Navbar from "../NavBar/NavBar";

export default function FindPage() {
    return (
        <>
            <AppTop />  
            <Navbar atFindPage={true} backColor="whiteBack" />

            {/* <SearchResults /> */}

            <FAQ />
        </>
    );
};