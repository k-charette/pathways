import React from "react"

const ReviewTile = props => {
  return (
    <div className="grid-x">
      <div className="image-container">
        <div className="grid small-6 medium-6">
          {props.title}
          {props.body}
          {props.rating}
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
