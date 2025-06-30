import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import RoomList from './pages/RoomList';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');
  return (
    <div>
     {!isOwnerPath && <Navbar/>} 
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<RoomList/>} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>

     </div>
     <Footer /> {/* why use footer like this all pages using nav and footer */}
    </div>
  )
}

export default App
