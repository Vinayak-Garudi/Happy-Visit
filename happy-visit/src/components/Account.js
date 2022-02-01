import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";


const Account = () => {

  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to Log Out')
    }
  }

  return (
    <>
      <center>
        <div className="account">

          <div className="profile">
            <Link to={"/profile"}>Edit Profile</Link>
          </div>

          {/* <div className="preference">
            <Link to={"/preference"}>Edit Preferences</Link>
          </div> */}

          <div className="visited">
            <Link to={"/visited"}>Places Visited</Link>
          </div>

          <Button variant="link" onClick={handleLogout}>Log Out</Button>

        </div>
      </center>
    </>
  );
};

export default Account;
