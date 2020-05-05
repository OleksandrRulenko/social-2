import React from 'react'
import s from './Menu.module.css'

const Menu = () => {
    return (   
      <nav className={s.menu}>
        <a href='/profile'>
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/></div>
            <div className={s.menuItemLink}>Profile</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </a>
        <a href='/dialogs'>
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/></div>
            <div className={s.menuItemLink}>Dialogs</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </a>

      </nav>
    )
}

export default Menu;