import React, { useState, useEffect } from "react"
import StationInfoTile from "./StationInfoTile"
import StationStatusTile from "./StationStatusTile"
import StationShowContainer from "./StationShowContainer"

const StationsIndexContainer = props => {

  return (
    <div className="grid-x small-4 medium-6 large-8">
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
