import React from 'react'
import s from './Menu.module.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (   
      <nav className={s.menu}>
        <NavLink to='/profile' activeClassName={s.activeLink}>
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/></div>
            <div className={s.menuItemLink}>Profile</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </NavLink>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/></div>
            <div className={s.menuItemLink}>Dialogs</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </NavLink>
      </nav>
    )
}

export default Menu;