import React from 'react'
import { GoogleMap, LoadScript, TransitLayer, OverlayView, Marker } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import museumCoordinates from './museumCoordinates';

// require('dotenv').config(); // Do I need this?
const containerStyle = {
  width: '100vw',
  height: '100vh',
  fontFamily: 'Arial',
};

const center = {
  lat: 51.50811919273866,
  lng: -0.12754601332062465
};

const onLoad = markerLoad => {
  console.log('marker: ', markerLoad)
}
// this overwrites the subway colors 
const options = {
  // styles: mapStyles,
  streetViewControl: false,
  disableDefaultUI: true,
  zoomControl: true,
}

function LondonMap() {
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
          />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(LondonMap)


