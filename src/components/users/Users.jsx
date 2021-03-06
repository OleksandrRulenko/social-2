import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/icons/avatar.png'
import { NavLink } from 'react-router-dom';

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
                            ?  <button disabled={props.followingInProgress.some(id => id === u.id )} 
                                onClick={ () => { props.unfollow(u.id) } } >Unfollow</button>
                                
                            :  <button disabled={props.followingInProgress.some( id => id === u.id )} 
                                onClick={ () => { props.follow(u.id) } } >Follow</button>
                        }
                    </div>
                </div>
            )
        }
    </div>
}

export default Users









