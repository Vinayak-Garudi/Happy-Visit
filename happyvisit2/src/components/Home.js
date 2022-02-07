import React, { useState, useEffect} from 'react';
import List from './List/List';
import Map from './Map/Map';
import { getPlacesData } from '../api/index';
import { Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import {CssBaseline, Grid } from '@material-ui/core';

import {Autocomplete} from '@react-google-maps/api';
{/*import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';*/}


{/*import PlaceDetails from './components/PlaceDetails/PlaceDetails';*/}

{/*import { getPlacesData } from './src/api/index';*/}

const Home = () => {
  const [type, setType] = useState('restaurants');
  
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  
  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };
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
            
            <Autocomplete>
            <li>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
            </Autocomplete>
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


      <CssBaseline />
      {/*<Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} /> */}
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            
            
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
