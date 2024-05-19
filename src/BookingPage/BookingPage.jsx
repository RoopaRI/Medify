import React from "react";
import AppTop from "../AppTop/AppTop";
import Navbar from "../NavBar/NavBar";
import Bookings from "../Bookings/Bookings";

export default function BookingsPage() {
    return (
        <>
            <AppTop />  
            <Navbar atBookingsPage={true} backColor="whiteBack" />
            <Bookings />
        </>
    );
};
