import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = ({places, type, setType, childClicked, isLoading}) => {
    
    const [elRefs, setelRefs] = useState([]);
    const classes = useStyles();

    useEffect(() => {
      setelRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    

    return (
      <div className={classes.container}>
        <Typography variant="h4">Restaurants, Hotels and Attractions</Typography>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
              <InputLabel id="type">Type</InputLabel>
              <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} key={i} item xs={12}>
                  <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    );
  };
  
  export default List;
  