import React, { useState, useEffect } from "react"
import StationInfoTile from "./StationInfoTile"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

const MapContainer = props => {
  const [markerInfo, setMarkerInfo] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  })

  const [stationLocation, setStationLocation] = useState({

  })

  const mapStyles = {
    width: "80%",
    height: "55%",
    border: "1px solid #000",
    margin: "auto",
    position: "relative"
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
      <Map
        google={props.google}
        onClick={mapClick}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 42.361488, lng: -71.070264 }}
      >
        <Marker
          onClick={markerClick}
          title={'The station with the most bikes.'}
          name={'Tremont St at E Berkeley St'}
          position={{ lat: 42.345392, lng: -71.069616 }}
        />
        <Marker
          onClick={markerClick}
          title={'I love this station.'}
          name={'Colleges of the Fenway - Fenway at Avenue Louis Pasteur'}
          position={{ lat: 42.34011512249236, lng: -71.10061883926392 }}
        />
        <InfoWindow
          marker={markerInfo.activeMarker}
          visible={markerInfo.showingInfoWindow}
        >
          <div>
            <h4> {markerInfo.selectedPlace.name} </h4>
            <h6> {markerInfo.selectedPlace.title} </h6>
          </div>
        </InfoWindow>
      </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKhT2ZbfEWEBLSouEn79BAmCJngeQO8B4"
})(MapContainer);
