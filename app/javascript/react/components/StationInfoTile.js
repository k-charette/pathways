import React, { useState, useEffect } from "react"

const StationInfoTile = props => {
  const [stations, setStations] = useState({})

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
    .then(fetchedData => {
      setStations(fetchedData)
    })
  }, [])

  let stationInfo;

  if (stations.data !== undefined) {
    stationInfo = stations.data.stations.map((station) => {
      return(
        <div className="station-box" key={station.station_id}>
          <p> {station.station_id} - {station.name} </p>
        </div>
        )
      })
  } else {
    stationInfo = <h1> Information Not Available </h1>
  }

  return (
    <div>
      { stationInfo }
    </div>
  )
}

export default StationInfoTile
