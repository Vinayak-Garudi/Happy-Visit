import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  // const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="navbar-brand" to={"/"}>Happy-Visit</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/account"}>Account</Link>
            </li>

            <li>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
          </ul>

        </div>
      </nav>

      <div>
        <Link className="Trekking" to={"/trekking"}>Trekking</Link>
      </div>
      <div>
        <Link className="Heritage" to={"/heritage"}>Heritage</Link>
      </div>
      <div>
        <Link className="Wildlife" to={"/wildlife"}>Wildlife</Link>
      </div>
      <div>
        <Link className="Pilgrimage" to={"/pilgrimage"}>Pilgrimage</Link>
      </div>
      <div>
        <Link className="HillStations" to={"/hillstations"}>Hill Stations</Link>
      </div>
      <div>
        <Link className="BeachTour" to={"/beachtour"}>Beach Tour</Link>
      </div>
    </>
  );
};

export default Home;
