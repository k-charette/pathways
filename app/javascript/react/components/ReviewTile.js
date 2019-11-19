import React from "react"

const ReviewTile = props => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <div className="review-box"> <br/>
          <div className="review-container">
            <div> {props.formatDate} </div>
            <div className="title"> {props.title} </div>
            <div className="comment"> {props.body} </div>
            <div className="rating"> {props.rating} / 5 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
