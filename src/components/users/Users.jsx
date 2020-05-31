import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../assets/icons/avatar.png'


class Users extends React.Component {

    constructor(props) {
        super(props);  
        
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });          
    }

    render() {
        return <div>
            {
                this.props.users.map( u => <div key={u.id} className={s.userItem}> 
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
                        ? <button onClick={ () => { this.props.unfollow(u.id) } } >Unfollow</button>
                        : <button onClick={ () => { this.props.follow(u.id) } } >Follow</button>}
                    </div>
                </div>)
            }
        </div>
    }
}


export default Users


