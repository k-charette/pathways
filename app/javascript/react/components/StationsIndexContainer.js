import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import StationStatusTile from "./StationStatusTile"
import StationFormContainer from "./StationFormContainer"
import MapContainer from "./MapContainer"
import StationInfoTile from "./StationInfoTile"
import bikeImage from "./bikes1.jpg"
import bikeImage2 from "./bikes2.jpg"

const StationsIndexContainer = props => {

  return (
    <div className="grid-x grid-padding-x">
      <img className="front-page-image" alt="image of bikes" src={bikeImage} />
      <h2>
        <span className="find-station">
          <h1> Find a Bike Station </h1> <br/>
        </span>
      </h2>
      <div className="cell small-6 large-6 map">
        <MapContainer />
      </div>
    </div>
  )
}

export default StationsIndexContainer
