import React from 'react';
import s from'./HeaderUserMenu.module.css';

const HeaderUserMenu = () => {
   return (
    <div className={`${s.headerUserMenuContainer} ${s.hoverBGColor}`}>
      <div className={s.userName}>Rulenko</div>
      <div className={s.userAwatar}>FF</div>
      <div className={s.userMenuIcon}>&#8650;</div>

        <div className={s.userMenuItems}>
          <div className={`${s.menuItem} ${s.hoverBGColor}`}>
            {/* <div className='menuItemIcon'><img src="./img/icon/settings.png" alt=""></div> */}
            <div className={s.menuItemIcon}><img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/></div>
            <div className={s.menuItemLink}>Settings</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
          {/* <div className='menuItem, hoverBGColor'>
            <div className='menuItemIcon'><img src="./img/icon/goin.png" alt=""></div>
            <div className='menuItemLink'>Go in</div>
            <div className='menuItemCounter'></div>
          </div>
          <div className='menuItem, hoverBGColor'>
            <div className='menuItemIcon'><img src="./img/icon/goout.png" alt=""></div>
            <div className='menuItemLink'>Go out</div>
            <div className='menuItemCounter'></div>
          </div> */}
        </div>
        
    </div>
   ) 
}

export default HeaderUserMenu;