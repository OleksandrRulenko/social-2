import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}> 
            <div className={s.profileInfoImg}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={s.profileInfoDescription}>
                <ProfileStatus 
                    updateStatus={props.updateStatus}
                    status={props.status}
                />
            </div>
         
        </div>
    )
}

export default ProfileInfo;