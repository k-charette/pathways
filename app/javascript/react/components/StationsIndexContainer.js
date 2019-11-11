import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import StationStatusTile from "./StationStatusTile"
import StationFormContainer from "./StationFormContainer"
import MapContainer from "./MapContainer"
import StationInfoTile from "./StationInfoTile"
import bikeImage from "./bikes1.jpg"

const StationsIndexContainer = props => {

  return (
    <div className="grid-x grid-padding-x">
      <img className="front-page-image" alt="image of bikes" src={bikeImage} />
      <h2>
        <span className="find-station">
          <h1 className="find-station-text"> Find a Bike Station </h1> <br/>
          <button className="button">
            <div className="btn-text">
              <Link to="/stations/1"> Get Started </Link>
            </div>
          </button>
        </span>
      </h2>
      <div className="cell small-6 large-6 map">
        <MapContainer />
      </div>
    </div>
  )
}

export default StationsIndexContainer
