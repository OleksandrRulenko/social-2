import React from 'react';
import s from './Users.module.css';
import userPhoto from '../assets/icons/avatar.png'


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









