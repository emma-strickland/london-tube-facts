import React from 'react'
import { GoogleMap, LoadScript, TransitLayer } from '@react-google-maps/api';

// require('dotenv').config(); // Do I need this?
const containerStyle = {
  width: '100%',
  height: '650px'
};

const center = {
  lat: 51.50811919273866,
  lng: -0.12754601332062465
};

function LondonMap() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}

      // mapStyle={mapStyle}
      >
        <TransitLayer />
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(LondonMap)

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Welcome to London Tube Map.
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


