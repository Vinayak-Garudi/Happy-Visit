import './App.css';
import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Preference from './components/Preference';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Account from './components/Account';
import Visited from './components/Visited';
import Profile from './components/Profile';
// import Logout from '.components/Logout';


function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>



  return (
    <BrowserRouter>
      <div className="App">
        <Auth />
        {/* <Preference /> */}
      </div>

      <Routes>
        <Route exact path="/preference" element={<Preference />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/visited" element={<Visited />} />
        {/* <Route exact path="/auth" element={<Auth />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
