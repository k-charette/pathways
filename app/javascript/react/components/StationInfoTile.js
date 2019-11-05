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
    .then(fetchedInfo => {
      setStations(fetchedInfo)
    })
  }, [])

  let stationInfo;

  if (stations.data !== undefined) {
    stationInfo = stations.data.stations.map((station) => {
      return(
        <div key={station.station_id}>
          <p>
            Station Name: {station.name}
          </p>
        </div>
        )
      })
  } else {
    stationInfo = <h1> Information Not Available </h1>
  }

  return (
    <div>
      {stationInfo}
    </div>
  )
}

export default StationInfoTile
