import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

const Account = () => {
  return (
    <>
    <center>
      <div className="account">

        <div className="profile">
        <Link to={"/profile"}>Edit Profile</Link>
        </div>

        <div className="preference">
        <Link to={"/preference"}>Edit Preferences</Link>
        </div>

        <div className="visited">
        <Link to={"/visited"}>Places Visited</Link>
        </div>

        {/* <div className="logout">
        <Link to={"/auth"}>Log Out</Link>
        </div> */}

      </div>
    </center>
    </>
  );
};

export default Account;
