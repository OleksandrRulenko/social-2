import React from 'react'
import s from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'


const Profile = (props) => {

    return (
        <div className={s.profilePage}> 
            <ProfileInfo />
            <hr />
            
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;