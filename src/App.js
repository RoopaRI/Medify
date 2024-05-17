import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import {BookingsContext, FoundHospitalsContext} from "./Context/Context";
import FindPage from "./FindPage/FindPage";
import Download from "./Download/Download";
import Footer from "./Footer/Footer";
import BookingsPage from './BookingPage/BookingPage';

function App() {
  const [bookings, setBookings] = useState([]);
  const [foundHospitals, setFoundHospitals] = useState({
    hospitals: [],
    cityName: "",
    stateName: "",
    noSearchYet: true
  });

  return (
    <>
      <div className='App'>
        <BookingsContext.Provider value={[bookings, setBookings]}>
          <FoundHospitalsContext.Provider value={[foundHospitals, setFoundHospitals]}>
            <BrowserRouter>
              <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/home' exact element={<HomePage />} />
                <Route path='/find' exact element={<FindPage />} />
                <Route path='/bookings' exact element={ <BookingsPage />} />
              </Routes>
            </BrowserRouter>
          </FoundHospitalsContext.Provider>
        </BookingsContext.Provider>
        <Download />
        <Footer />
      </div>
    </>
  );
}

export default App;
