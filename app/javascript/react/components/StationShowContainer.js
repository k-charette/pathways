import React, { useState, useEffect } from "react"
import StationInfoTile from "./StationInfoTile"

const StationShowContainer = props => {
  return (
    <div className="review-container">
      <form className="review-form">
        <label htmlFor="title">
          <div>
            <h2> Title:</h2>
            <input
              className="title-box"
              id="title"
              name="title"
              type="text"
              placeholder="Enter title here."
            />
          </div>
        </label>
        <label htmlFor="comment">
          <div>
            <h2> Comment:</h2>
              <textarea
                className="comment-box"
                id="comment"
                name="comment"
                type="text"
                placeholder="Enter comment here."
              />
          </div>
        </label>
        <label htmlFor="rating">
          <div>
            <h2> Rating:</h2>
            <input
              className="rating-box"
              id="rating"
              name="rating"
              type="number"
              placeholder="Enter rating here."
            />
          </div>
        </label>
        <div className="button-group">
          <input
            className="button"
            type="submit"
            value="Submit Comment"
          />
        </div>
      </form>
    </div>
  )
}

export default StationShowContainer
