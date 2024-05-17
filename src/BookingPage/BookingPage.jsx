import React from "react";
import AppTop from "../AppTop/AppTop";
import Navbar from "../NavBar/NavBar";

export default function BookingsPage() {
    return (
        <>
            <AppTop />  
            <Navbar atBookingsPage={true} backColor="whiteBack" />
        </>
    );
};
