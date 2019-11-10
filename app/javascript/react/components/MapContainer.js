import React, { useState, useEffect } from "react"
import StationInfoTile from "./StationInfoTile"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

const MapContainer = props => {

  const [markerInfo, setMarkerInfo] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
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

  const pos = {
    lat: 42.341814, lng: -71.090179
  }

  return (
    <div>
      <Map
        google={props.google}
        onClick={mapClick}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 42.361488, lng: -71.070264 }}
      >
        <Marker
          className="marker"
          onClick={markerClick}
          name={'Tremont St at E Berkeley St'}
          position={{ lat: 42.345392, lng: -71.069616 }}
          icon={{
            url: "https://image.flaticon.com/icons/png/128/130/130276.png",
            anchor: new google.maps.Point(32,32),
            scaledSize: new google.maps.Size(40,40)
          }}
        />
        <Marker
          onClick={markerClick}
          name={'Colleges of the Fenway - Fenway at Avenue Louis Pasteur'}
          position={{ lat: 42.34011512249236, lng: -71.10061883926392 }}
        />
        <InfoWindow
          marker={markerInfo.activeMarker}
          visible={markerInfo.showingInfoWindow}
        >
          <div className="station-info-box">
            <p> {markerInfo.selectedPlace.name} </p>
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKhT2ZbfEWEBLSouEn79BAmCJngeQO8B4"
})(MapContainer);
