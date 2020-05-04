import React from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Profile from './components/profile/Profile';
import HeaderUserMenu from './components/header-user-menu/HeaderUserMenu';

const App = () => {
return (
    <div className='gridContainer' >
      <header className='header'>
        <div className='logo'>rulenko.com</div>
        <div className='lookFor'>( 2 ) look</div>
        <HeaderUserMenu />
      </header>

      <div className='sideBarLeft'>
        <Menu />
      </div>

      <div className='content'>
        <Profile />
      </div>

      <div className='sideBarRight'>

      </div>

      <footer className='footer'>
        <a href='https://rulenko.com/' target='_blank' >rulenko.com </a> https://icons8.com
      </footer>
    </div>
  );
}



export default App;
