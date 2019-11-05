import React, { useState, useEffect } from "react"
import StationInfoTile from "./StationInfoTile"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"

const MapContainer = props => {

  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})

  const mapStyles = {
    width: "80%",
    height: "80%",
    border: "1px solid black",
    margin: "auto",
    position: "relative"
  }

  const markerClick = (props, marker, e) => {
    setShowingInfoWindow(true),
    setActiveMarker(marker),
    setSelectedPlace(props)
    console.log("You clicked me!")
  }

  return (
    <div>
      <Map
        className={'map'}
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 42.361488, lng: -71.070264 }}
      >
        <Marker
          title={'The station with the most bikes.'}
          onClick={markerClick}
          name={'Tremont St at E Berkeley St'}
          position={{ lat: 42.345392, lng: -71.069616 }}
        />
        <InfoWindow
          marker={props.activeMarker}

          >

        </InfoWindow>
      </Map>
      <br/>
      <br/>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAKhT2ZbfEWEBLSouEn79BAmCJngeQO8B4'
})(MapContainer);
