import React, { useState, useEffect } from "react"

const StationStatusTile = props => {
  const [stationsStatus, setStationsStatus] = useState({})

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
    <div>
      <p className="station-info">
        {stationAvailability}
      </p>
    </div>
  )
}

export default StationStatusTile
