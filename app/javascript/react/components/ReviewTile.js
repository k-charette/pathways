import React from "react"

const ReviewTile = props => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <div className="review-box">
          <div className="review-container">
            <div className="title"> Title: {props.title} </div>
            <div className="comment"> Comment: {props.body} </div>
            <div className="rating"> Rating: {props.rating} / 5 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
