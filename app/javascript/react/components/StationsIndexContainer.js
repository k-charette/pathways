import React, { useState, useEffect } from "react"
import StationInfoTile from "./StationInfoTile"
import StationStatusTile from "./StationStatusTile"

const StationsIndexContainer = props => {
  const [loadComplete, setLoadComplete] = useState(false)

  return (
    <div className="grid-x">
      <div className="station-names">
        <StationInfoTile
        />
      </div>

      <div className="station-names">
        <StationStatusTile
        />
      </div>
    </div>
  )
}

export default StationsIndexContainer
