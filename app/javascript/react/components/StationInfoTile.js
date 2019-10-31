import React, { useState, useEffect } from "react"

const StationInfoTile = props => {

  return (
    <div>
      <p className="station-names">
        {props.id} - {props.name}
      </p>
    </div>
  )
}

export default StationInfoTile
