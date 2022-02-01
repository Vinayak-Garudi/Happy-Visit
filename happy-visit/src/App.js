import './App.css';
import React from 'react';
// import Preference from './components/Preference';
// import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Account from './components/Account';
import Visited from './components/Visited';
import Profile from './components/Profile';
import Signup from './components/Signup';
// import { Container } from 'react-bootstrap';
import { AuthProvider } from "./contexts/AuthContext";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import HillStations from './Places/HillStations';
import Heritage from './Places/Heritage';
import Pilgrimage from './Places/Pilgrimage';
import Trekking from './Places/Trekking';
import Wildlife from './Places/Wildlife';
import BeachTour from './Places/BeachTour';

function App() {
  // const { isLoading } = useAuth0();
  // if (isLoading) return <div>Loading...</div>


  return (
    <>
      {/* <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }} >
        <div className="w-100" style={{ maxWidth: '400px' }}> */}
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
            <Route exact path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route exact path="/visited" element={<PrivateRoute><Visited /></PrivateRoute>} />
            <Route exact path="/hillstations" element={<PrivateRoute><HillStations /></PrivateRoute>} />
            <Route exact path="/heritage" element={<PrivateRoute><Heritage /></PrivateRoute>} />   
            <Route exact path="/pilgrimage" element={<PrivateRoute><Pilgrimage /></PrivateRoute>} />  
            <Route exact path="/trekking" element={<PrivateRoute><Trekking /></PrivateRoute>} />    
            <Route exact path="/wildlife" element={<PrivateRoute><Wildlife /></PrivateRoute>} /> 
            <Route exact path="/beachtour" element={<PrivateRoute><BeachTour /></PrivateRoute>} />
            {/* <Route exact path="/preference" element={<PrivateRoute><Preference /></PrivateRoute>} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      {/* </div>
      </Container> */}
    </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/preference" element={<Preference />} />
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/account" element={<Account />} />
    //     <Route exact path="/Profile" element={<Profile />} />
    //     <Route exact path="/visited" element={<Visited />} />
    //   </Routes>

    // </BrowserRouter>
  );
}

export default App;
