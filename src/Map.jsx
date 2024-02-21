import React, { useState } from 'react';
import { geoCentroid } from 'd3-geo';
import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";

import {
    ComposableMap, //map container
    Geographies, //json of all countries
    Geography, //each country object
    Marker, //method to create a marker
    Annotation, // method to create an annotation
} from 'react-simple-maps';

import allStates from "./allstates.json";

const geoURL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = { 
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
  };
  
const Map = () => {
  const [state, setStates] = useState([]);
  const navigate = useNavigate();

  const handleStateClick = (stateName) => {
    // Retrieve user information from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser) {
      // Check if the clicked state is already in the user's locations array
      if (storedUser.locations.includes(stateName)) {
        // Remove the clicked state from the user's locations array
        storedUser.locations = storedUser.locations.filter(state => state !== stateName);
        console.log('State removed from user\'s locations array');
      } else {
        // Add the clicked state to the user's locations array
        storedUser.locations.push(stateName);
      }
  
      // Store the updated user information back in local storage
      localStorage.setItem('user', JSON.stringify(storedUser));
    } else {
      console.error('User not found in local storage');
    }
  };

  // Sends user back to login page
  const handleLogout = () => { 
    navigate('/');
  }

  return (
    <div 
      className='App' 
      style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "cream"
      }}>
      
      <h1>Let's track our travels!</h1>

      {/* component to render map */}

      <div style={{width: "1400px", borderStyle: "double"}}>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoURL}>
            {({ geographies }) => (
              <>
              {/* this first geographies.map creates the individual state elements */}
              {geographies.map((geo) => ( 
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => { 
                    console.log(geo.properties.name, 'clicked!'); 
                    setStates(geo.properties.name); 
                    handleStateClick(geo.properties.name);
                  }}
                  style={{
                    default: {
                      fill: JSON.parse(localStorage.getItem('user'))?.locations.includes(geo.properties.name) ? "#65A5B8" : "#F3EBE2", 
                      stroke: "green"
                    },
                    hover: { fill: "#0081B8", outline: "#505168"},
                    pressed: {fill: "#65A5B8", outline: "#65A5B8" }
                  }}
                  />
              ))}
              {/* this second geographies.map adds the labels to the state elements. States either get a marker(aka label) or an annotation */}
              {geographies.map(geo => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find(s => s.val === geo.id);
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur &&
                      centroid[0] > -160 &&
                      centroid[0] < -67 &&
                      (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={14} textAnchor="middle">
                            {cur.id}
                          </text>
                        </Marker>
                      ) : (
                        <Annotation
                          subject={centroid}
                          dx={offsets[cur.id][0]}
                          dy={offsets[cur.id][1]}
                        >
                          <text x={4} fontSize={14} alignmentBaseline="middle">
                            {cur.id}
                          </text>
                        </Annotation>
                      ))}
                  </g>
                );
                })}
                </>
            )}
            
          </Geographies>
        </ComposableMap>
      </div>
      <Button borderRadius="9px" type="submit" variant="solid" marginBottom="15px" colorScheme="brand" onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Map;