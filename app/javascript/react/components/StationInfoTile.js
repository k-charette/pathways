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
      // setLoadComplete(true)
    })
  }, [])

  let stationInfo;

  if (stations.data !== undefined) {
    stationInfo =  stations.data.stations.map((station) => {
      return(
        <div className="station-box" key={station.station_id}>
          <h5> {station.station_id} - {station.name} </h5>
        </div>
        )
      })
  } else {
    stationInfo = <h1> no </h1>
  }

  console.log("Station Info Tile", stations)
  return (
    <div>
      { stationInfo }
    </div>
  )
}

export default StationInfoTile
