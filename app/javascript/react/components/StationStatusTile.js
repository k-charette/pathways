import React, { useState, useEffect } from "react"

const StationStatusTile = props => {

  return (
    <div>
      <p className="station-info"> Id: {props.id} / Number of Bikes: {props.num_bikes_available} / Number of Docks: {props.num_docks_available} / Last Updated: {props.lastUpdated} </p>
    </div>
  )
}

export default StationStatusTile
