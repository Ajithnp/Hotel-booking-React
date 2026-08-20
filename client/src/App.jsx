import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import RoomList from './pages/RoomList';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelRegistration from './components/HotelRegistration';
import Layout from './pages/Owner/Layout';
import DashBoard from './pages/Owner/DashBoard';
import AddRoom from './pages/Owner/AddRoom';
import ListRoom from './pages/Owner/ListRoom';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');
  const [showHotelReg, setShowHotelReg] = useState(false);
  return (
    <div>
     {!isOwnerPath && <Navbar/>} 
     {showHotelReg && <HotelRegistration /> }
      {/* /* This component is used to register a hotel, it can be conditionally rendered based on the state, if it is true it will visible */ }
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<RoomList/>} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/owner' element={<Layout/>}>
            <Route index element={<DashBoard/>} />
            <Route path='add-room' element={<AddRoom/>} />
            <Route path='list-room' element={<ListRoom/>} />
        </Route>
      </Routes>

     </div>
     <Footer />
    </div>
  )
}

export default App
