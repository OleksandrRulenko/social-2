import React from 'react'
import s from './Menu.module.css'
import { NavLink } from 'react-router-dom'
import iconHome from '../assets/icons/home.png'
import iconMessage from '../assets/icons/message.png'
import iconFriends from '../assets/icons/friends.png'

const Menu = () => {
    return (   
      <nav className={s.menu}>
        <NavLink to='/profile' activeClassName={s.activeLink}>
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src={ iconHome } alt=""/></div>
            <div className={s.menuItemLink}>Profile</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </NavLink>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src={ iconMessage } alt=""/></div>
            <div className={s.menuItemLink}>Dialogs</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </NavLink>
        <NavLink to='/users' activeClassName={s.activeLink}>
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src={ iconFriends } alt=""/></div>
            <div className={s.menuItemLink}>Users</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </NavLink>
      </nav>
    )
}

export default Menu;