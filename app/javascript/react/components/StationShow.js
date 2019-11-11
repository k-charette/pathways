import React from "react"

const StationShow = props => {
  return (
    <div className="station-info-box">
      <h3>Station Information</h3>
        <p>Station Location: {props.name}</p>
        <div>
        <p> Capacity: {props.capacity}</p>
        </div>
    </div>
  )
}

export default StationShow
