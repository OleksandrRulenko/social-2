import React from 'react'
import s from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'



const Profile = () => {


    return (
        <div className={s.profilePage}> 
            <ProfileInfo />
            <hr />
            
            <MyPosts />
        </div>
    )
}

export default Profile;