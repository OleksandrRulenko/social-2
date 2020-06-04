import React from 'react';
import s from'./UserMenu.module.css';
import userIcon from '../../assets/icons/user.png'
import settingsIcon from '../../assets/icons/settings.png'
import { NavLink } from 'react-router-dom';

const UserMenu = (props) => {
   return (
    <div className={`${s.headerUserMenuContainer} ${s.hoverBGColor}`}>
      <div className={s.userAwatar}><img src={userIcon} alt="" /></div>


      <div className={s.loginBlock}>
        { props.isAuth ? props.login
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>


     
      <div className={s.userMenuDropDownIcon}>&#8681;</div>

        {/* //////////////Drop-down menu. */}
        <div className={s.userMenuItems}>
          <div className={`${s.menuItem} ${s.hoverBGColor}`}>
            {/* <div className='menuItemIcon'><img src="./img/icon/settings.png" alt=""></div> */}
            <div className={s.menuItemIcon}><img src={settingsIcon} alt=""/></div>
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

export default UserMenu;