import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import StationStatusTile from "./StationStatusTile"
import StationFormContainer from "./StationFormContainer"
import MapContainer from "./MapContainer"
import StationInfoTile from "./StationInfoTile"
import StationTile from "./StationTile"
import StationShow from "./StationShow"
import bikeImage from "./bikes1.jpg"

const StationsIndexContainer = props => {
  const [stations, setStations] = useState([])

    useEffect(() => {
      let search = ""
      if (props.location.search) {
        search = props.location.search
      }
      fetch(`/api/v1/stations${search}.json`)
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
            throw(error)
        }
      })
      .then(response => response.json())
      .then(body => {
        setStations(body.stations)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

  return (
    <div className="grid-x grid-padding-x">
      <img className="front-page-image" alt="image of bikes" src={bikeImage} />
      <h2>
        <span className="find-station">
          <h1 className="find-station-text"> Find a Bike Station </h1> <br/>
          <button className="button">
            <div className="btn-text">
              <a href="/users/sign_up"> Get Started </a>
            </div>
          </button>
        </span>
      </h2>
    </div>
  )
}

export default StationsIndexContainer
