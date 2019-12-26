import React, { useState, useEffect } from "react"

const StationShow = props => {

return (
  <div>
    <div className="station-info-box">
      <h3 className="info-text">Station Information</h3>
        <p>Station Name: {props.name}</p>
        <div>
        <p> Bikes: {props.capacity}</p>
        </div>
    </div>
  </div>
  )
}

export default StationShow
