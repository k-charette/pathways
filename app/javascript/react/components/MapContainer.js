import React, { useState, useEffect } from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"
import * as stationData from "./dock-stations.json"

const MapContainer = props => {

  const mapStyles = {
    width: "70%",
    height: "70%"
  }
  return (
    <Map
      google={props.google}
      zoom={13}
      style={mapStyles}
      initialCenter={{ lat: 42.358119, lng: -71.057655 }}
    >
      <Marker
        title={'The station with the most bikes.'}
        name={'South Station'}
        position={{ lat: 42.359608, lng: -71.059479 }}
      />
      <InfoWindow> </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
