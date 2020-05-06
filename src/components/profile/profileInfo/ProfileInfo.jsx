import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}> 
            <div>
                <img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/>
            </div>
            <div>
                <p>ava + description</p>
            </div>
         
        </div>
    )
}

export default ProfileInfo;