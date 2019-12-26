import React, { useEffect, useState } from "react"
import UserShowTile from "./UserShowTile"

const UserShowContainer = props => {

    const [user, setUser] = useState({
        reviews: [],
        current_user: {},
        email: "",
        id: ""
    })

    const [profilePhoto, setProfilePhoto] = useState("")

    let userId = props.match.params.id

    useEffect(() => {
        fetch(`/api/v1/users/${userId}`)
        .then((response) => {
          if (response.ok) {
            return response
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage)
              throw(error)
          }
        })
        .then(response => response.json())
        .then(body => {
            setProfilePhoto(body.profile_photo.url)
            setUser(body)
          })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
      }, [])

    return (
        <div className="row user-show-container">
            <UserShowTile 
                profilePhoto={profilePhoto}
                email={user.email}
            />
        </div>
    )
}

export default UserShowContainer