import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const StationFormContainer = props => {
  const [newComment, setNewComment] = useState({
    title: "",
    comment: "",
    rating: ""
  })

  const addNewComment = event => {
    event.preventDefault()
    setNewComment({
      ...newComment, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const formSubmit = event => {
    event.preventDefault()
    let commentPayload = newComment
    props.postNewComment(commentPayload)
    setNewComment({
      title: "",
      comment: "",
      rating: ""
    })
  }

  return (
    <div className="grid-x grid-padding-x">
      <div className="cell small-12 medium-6">
        <div className="callout primary">
          <form onSubmit={formSubmit} className="review-form">
            <label htmlFor="title">Title </label>
              <input
                className="title-box"
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                value={newComment.title}
                onChange={addNewComment}
              />
            <label htmlFor="comment"> Comment </label>
              <input
                className="comment-box"
                id="comment"
                name="comment"
                type="text"
                placeholder="Comment"
                value={newComment.comment}
                onChange={addNewComment}
              />
            <label htmlFor="rating"> Rating </label>
              <input
                className="rating-box"
                id="rating"
                name="rating"
                type="number"
                placeholder= "0"
                value={newComment.rating}
                onChange={addNewComment}
              />
            <div className="button-box">
              <input
                className="button"
                type="submit"
                value="Submit Comment"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StationFormContainer
