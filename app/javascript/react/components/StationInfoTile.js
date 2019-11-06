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
        <MapContainer
          key={station.station_id}
          id={station.station_id}
          name={station.name}
          lat={station.lat}
          lon={station.lon}
        />
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


// <div key={station.station_id}>
//   <p>
//     Station Name: {station.name} <br/>
//     Lat: {station.lat} <br/>
//     Lon: {station.lon}
//   </p>
// </div>
