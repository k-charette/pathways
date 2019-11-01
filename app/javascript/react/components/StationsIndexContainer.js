import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import StationInfoTile from "./StationInfoTile"
import StationStatusTile from "./StationStatusTile"
import StationFormContainer from "./StationFormContainer"
import bikeImage from "./bikes1.jpg"
import bikeImage2 from "./bikes2.jpg"

const StationsIndexContainer = props => {
  const [stations, setStations] = useState({})
  const [stationsStatus, setStationsStatus] = useState({})

  useEffect(() => {
    fetch(`https://gbfs.bluebikes.com/gbfs/en/station_information.json`)
    .then((response) => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
          throw(error)
      }
    })
    .then(response => response.json())
    .then(fetchedInfo => {
      setStations(fetchedInfo)
    })
  }, [])

  let stationInfo;

  if (stations.data !== undefined) {
    stationInfo = stations.data.stations.map((station) => {
      return(
          <StationInfoTile
            key={station.station_id}
            id={station.station_id}
            name={station.name}
          />
        )
      })
  } else {
    stationInfo = <h1> Information Not Available </h1>
  }

  useEffect(() => {
    fetch(`https://gbfs.bluebikes.com/gbfs/en/station_status.json`)
    .then((response) => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
          throw(error)
      }
    })
    .then(response => response.json())
    .then(fetchedStatus => {
      setStationsStatus(fetchedStatus)
    })
  }, [])

  let stationAvailability;

  if (stationsStatus.data !== undefined) {
    stationAvailability =  stationsStatus.data.stations.map((station) => {
    const lastUpdated = new Date(station.last_reported * 1000).toDateString()
      return(
        <StationStatusTile
          key={station.station_id}
          id={station.station_id}
          num_bikes_available={station.num_bikes_available}
          num_docks_available={station.num_docks_available}
          lastUpdated={lastUpdated}
        />
        )
      })
  } else {
    <h1> Information Not Available </h1>
  }

  return (
    <div className="grid-x grid-padding-x">
      <img className="front-page-image" src={bikeImage} />
      <h2>
        <span className="nav-bar">
          <Link to="/"> Pathways </Link> <br/>
        </span>
        <span className="find-station">
          Find a Bike Station
        </span>
      </h2>
      <div className="what-can-you-do cell">
        <div className="middle-box">
          <h2>
            <span className="middle-text"> What Can You Do </span>
          </h2>
          <div className="middle-button">
            <button className="button"> Get Started </button>
          </div>
        </div>
      </div>
      <div className="cell small-6 large-6">
        {stationInfo}
      </div>
      <div className="cell small-6 large-6">
        {stationAvailability}
      </div>
    </div>
  )
}

export default StationsIndexContainer
