import React, { useState } from 'react'
import { GoogleMap, LoadScript, TransitLayer, OverlayView, Marker } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import museumCoordinates from './museumCoordinates';

// require('dotenv').config(); // Do I need this?
const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 51.50811919273866,
  lng: -0.12754601332062465
};


const options = {
  // styles: mapStyles, // this overwrites the subway colors 
  streetViewControl: false,
  disableDefaultUI: true,
  zoomControl: true,
}

function LondonMap() {
  // State for current selected marker
  const [selected, setSelected] = useState(null);
  console.log('selected museum! ', selected)
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        options={options}
      // preventGoogleFontsLoading={false}
      >
        {museumCoordinates.map((coordinate) => (
          <Marker
            key={coordinate.name}
            position={{ lat: coordinate.lat, lng: coordinate.lng }}
            onClick={() => setSelected(coordinate)}
          />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(LondonMap)


