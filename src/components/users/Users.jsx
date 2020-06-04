import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/icons/avatar.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <div>
        <div>
            {pages.map( p => {
                return <span className={ props.currentPage === p && s.selectedPage }
                onClick={ (e) => { props.onPageChanged(p); }}> { p } </span>
            })}
        </div>

        {
            props.users.map( u => 
                <div key={u.id} className={s.userItem}> 

                    <NavLink to={'/profile/' + u.id}> 
                        <div className={s.userAvatar}>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} alt='' />
                        </div>
                    </NavLink>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <div className={s.userName}>{ u.name }</div>
                        </NavLink>
                        <div className={s.userStatus}>{ u.status }</div>
                        {/* <div className={s.userLocation}>{ u.location.city } { u.location.country }</div> */}
                    </div>

                    <div className={s.userFollow}>
                        { u.followed
                        ? <button onClick={ () => { 
                         
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: { 'API-KEY': 'ce8a87aa-30e2-4320-86d2-b1029b457e9b' },
                            })
                            .then(response => {
                                if (response.data.resultCode == 0)  {
                                    props.unfollow(u.id); 
                                }
                            }); 

                        } } >Unfollow</button>
                        : <button onClick={ () => { 
                        
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: { 'API-KEY': 'ce8a87aa-30e2-4320-86d2-b1029b457e9b' },
                            })
                            .then(response => {
                                if (response.data.resultCode == 0)  {
                                    props.follow(u.id); 
                                }
                            });  
                            
                        } } >Follow</button>}
                    </div>
                </div>
            )
        }
    </div>
}

export default Users









