import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../assets/icons/avatar.png'


let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map( u => <div key={u.id} className={s.userItem}> 
                <div className={s.userAvatar}>
                    <img src={ u.photos.small != null ? u.photos.small : userPhoto} alt='' />
                </div>
                <div>
                    <div className={s.userName}>{ u.name }</div>
                    <div className={s.userStatus}>{ u.status }</div>
                    {/* <div className={s.userLocation}>{ u.location.city } { u.location.country }</div> */}
                </div>
                <div className={s.userFollow}>
                    { u.followed
                     ? <button onClick={ () => { props.unfollow(u.id) } } >Unfollow</button>
                     : <button onClick={ () => { props.follow(u.id) } } >Follow</button>}
                </div>
            </div>)
        }
    </div>
}

export default Users


