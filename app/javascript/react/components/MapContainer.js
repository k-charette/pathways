import React, { useState, useEffect } from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"
import StationInfoTile from "./StationInfoTile"
import StationShow from "./StationShow"

const MapContainer = props => {

  const [markerInfo, setMarkerInfo] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  })

  const mapStyles = {
    width: "47%",
    height: "55%",
    border: "1px solid #000"
  }

  const mapClick = (props) => {
    if (showingInfoWindow) {
      setMarkerInfo({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  const markerClick = (props, marker, e) => {
    setMarkerInfo({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  return (
    <div>
      <Map
        google={props.google}
        onClick={mapClick}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: props.lat, lng: props.lon }}
      >
        <Marker
          className="marker"
          onClick={markerClick}
          name={props.name}
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
          <div className="station-info-box station-popup-box">
          <p> {markerInfo.selectedPlace.name} </p>
          <p> Bikes - { props.capacity } </p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKhT2ZbfEWEBLSouEn79BAmCJngeQO8B4"
})(MapContainer);
