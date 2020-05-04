import React from 'react'
import s from './Menu.module.css'

const Menu = () => {
    return (   
      <nav className={s.menu}>
        <a href='https://rulenko.com/' target='_blank' >
          <div className={`${s.menuItems} ${s.hoverBGColor}`}>
            <div className={s.menuItemIcon}><img src="https://sun9-8.userapi.com/c629327/v629327473/db66/r051joYFRX0.jpg?ava=1" alt=""/></div>
            <div className={s.menuItemLink}>My page</div>
            <div className={s.menuItemCounter}>hh</div>
          </div>
        </a>
        {/* <div className='menuItems, hoverBGColor'>
          <div className='menuItemIcon'><img src="./img/icon/news.png" alt=""></div>
          <div className='menuItemLink'>News</div>
          <div className='menuItemCounter'></div>
        </div>
        <div className='menuItems, hoverBGColor'>
          <div className='menuItemIcon'><img src="./img/icon/message.png" alt=""></div>
          <div className='menuItemLink'>Message</div>
          <div className='menuItemCounter'></div>
        </div>
        <div className='menuItems, hoverBGColor'>
          <div className='menuItemIcon'><img src="./img/icon/friends.png" alt=""></div>
          <div className='menuItemLink'>Friends</div>
          <div className='menuItemCounter'></div>
        </div>
        <div className='menuItems, hoverBGColor'>
          <div className='menuItemIcon'><img src="./img/icon/groups.png" alt=""></div>
          <div className='menuItemLink'>Groups</div>
          <div className='menuItemCounter'></div>
        </div>
        <div className='menuItems, hoverBGColor'>
          <div className='menuItemIcon'><img src="./img/icon/photos.png" alt=""></div>
          <div className='menuItemLink'>Photos</div>
          <div className='menuItemCounter'></div>
        </div>
        <div className='menuItems, hoverBGColor'>
          <div className='menuItemIcon'><img src="./img/icon/games.png" alt=""></div>
          <div className='menuItemLink'>Games</div>
          <div className='menuItemCounter'></div>
        </div>
        <div className='menuItems, hoverBGColor'>
          <div className='menuItemIcon'><img src="./img/icon/user.png" alt=""></div>
          <div className='menuItemLink'>People</div>
          <div className='menuItemCounter'></div>
        </div> */}
      </nav>
    )
}

export default Menu;