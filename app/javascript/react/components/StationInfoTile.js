import React, { useState, useEffect } from "react"

import StationTile from "./StationTile"

const StationInfoTile = props => {
  const [stations, setStations] = useState({})

  useEffect(() => {
    fetch("/api/v1/stations")
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
  },[])
  
  return (
    <div>

    </div>
  )
}

export default StationInfoTile
