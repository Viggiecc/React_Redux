import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
export default (props) => {
  const GettingStartedGoogleMap = withGoogleMap(props => (

    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: Number(props.lat), lng: Number(props.lon) }}
    >
    </GoogleMap>
  ));

  return(
    <GettingStartedGoogleMap
      containerElement={
        <div style={{ height: '100%'}} />
      }
      mapElement={
        <div style={{ height: '100%'}} />
      }
    />
  );
}
