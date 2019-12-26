import React from "react"

const UserShowTile = props => {

    let email = props.email
    let profilePhoto = props.profilePhoto

    return(
        <div className="columns large-12 show-user-tile"> 
            <div className="row">
                <div className="small-12 medium-4 large-4 columns user-info-column"> 
                    <div className="medium-3 columns user-profile-email">    
                        <h5>{email}</h5>
                    </div> 
                    <div className="row columns profile-image-container">
                        <img className="profile-image" src={profilePhoto} /> 
                    </div>
                </div>
                <div className="small-12 medium-4 large-4 columns reviews-colmn">
                    <h2 className="text-center reviews-header">My Reviews:</h2>
                    <ol></ol>
                </div>
            </div>
        </div>
    )
}

export default UserShowTile
