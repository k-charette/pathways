import React, { useState, useEffect } from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"
import MapContainer from "./MapContainer"

const StationShow = props => {

return (
  <div>
    <div className="station-info-box">
      <h3 className="info-text">Station Information</h3>
        <p>Station Location: {props.name}</p>
        <div>
        <p> Bikes: {props.capacity}</p>
        </div>
    </div>
  </div>
  )
}

export default StationShow
