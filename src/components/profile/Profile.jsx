import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPostsContainer from './myPosts/MyPostsContainer'


const Profile = (props) => {
 
    return (
        <div className={s.profilePage}> 
            <ProfileInfo />
            <hr />
            
            <MyPostsContainer />
        </div>
    )
}

export default Profile;