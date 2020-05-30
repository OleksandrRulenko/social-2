import React from 'react';
import s from './Users.module.css';

let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Big_emblem_of_Ukraine.svg/200px-Big_emblem_of_Ukraine.svg.png'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers ( [
            { 
                id: 1, 
                followed: false,
                photoUrl: url,
                fullName: 'Dima', 
                status: 'I am a boss', 
                location: {
                    city: 'Minsk', 
                    country: 'Belarus'
                } 
            },
        {id: 2, followed: true, photoUrl: url, fullName: 'Ola', status: 'I am a girl', location: {city: 'Kiev', country: 'Ukraina'} },
        {id: 3, followed: false, photoUrl: url, fullName: 'Tom', status: 'I am a cat', location: {city: 'Chreńsko', country: 'Czechy'} },
        ])
    }
    return <div>
        {
            props.users.map( u => <div key={u.id} className={s.userItem}> 
                <div className={s.userAvatar}>
                    <img src={u.photoUrl} alt='' />
                </div>
                <div>
                    <div className={s.userName}>{ u.fullName }</div>
                    <div className={s.userStatus}>{ u.status }</div>
                    <div className={s.userLocation}>{ u.location.city } { u.location.country }</div>
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


