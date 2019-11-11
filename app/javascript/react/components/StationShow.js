import React, { useState, useEffect } from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

import StationStatusTile from "./StationStatusTile"

const StationShow = props => {

  const [markerInfo, setMarkerInfo] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  })

  const markerClick = (props, marker, e) => {
    setMarkerInfo({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  const mapStyles = {
    width: "47%",
    height: "55%",
    border: "1px solid #000"
  }

return (
  <div>
    <div className="station-info-box">
      <h3 className="info-text">Station Information</h3>
        <p>Station Location: {props.name}</p>
        <div>
        <p> Bikes: {props.capacity}</p>

        <p> Available:</p>
        </div>
    </div>
    <div className="station-page-map">
      <Map
        google={props.google}
        style={mapStyles}
        zoom={16}
        initialCenter={{ lat: props.lat, lng: props.lon }}
      >
      <Marker
        onClick={markerClick}
        className="marker"
        name={ props.name }
        position={{ lat: props.lat, lng: props.lon }}
        icon={{
          url: "https://image.flaticon.com/icons/png/128/130/130276.png",
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(40,40)
        }}
      />
      <InfoWindow
        marker={markerInfo.activeMarker}
        visible={markerInfo.showingInfoWindow}
      >
        <div className="station-popup-box">
          <p> {markerInfo.selectedPlace.name} </p>
          <p> Bikes - { props.capacity } </p>
        </div>
      </InfoWindow>
      </Map>
    </div>
  </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKhT2ZbfEWEBLSouEn79BAmCJngeQO8B4"
})(StationShow);
