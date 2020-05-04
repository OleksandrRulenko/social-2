import React from 'react';

const HeaderUserMenu = () => {
   return (
      <div className='headerUserMenu hoverBGColor'>
      <div className='userName'>Rulenko</div>
      <div className='userAwatar'>FF</div>
      <div className='userMenuIcon'>&#8650;</div>
        <div className='userMenu'>
          <div className='menuItems hoverBGColor'>
            {/* <div className='menuItemIcon'><img src="./img/icon/settings.png" alt=""></div> */}
            <div className='menuItemIcon'><img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/></div>
            <div className='menuItemLink'>Settings</div>
            <div className='menuItemCounter'>hh</div>
          </div>
          {/* <div className='menuItems, hoverBGColor'>
            <div className='menuItemIcon'><img src="./img/icon/goin.png" alt=""></div>
            <div className='menuItemLink'>Go in</div>
            <div className='menuItemCounter'></div>
          </div>
          <div className='menuItems, hoverBGColor'>
            <div className='menuItemIcon'><img src="./img/icon/goout.png" alt=""></div>
            <div className='menuItemLink'>Go out</div>
            <div className='menuItemCounter'></div>
          </div> */}
        </div>
    </div>
   ) 
}

export default HeaderUserMenu;