import React from 'react'
import s from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.profilePage}> 
            <img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/>
            <p>ava + description</p>

            <MyPosts />
        </div>
    )
}

export default Profile;