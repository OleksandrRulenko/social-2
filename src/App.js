import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Profile from './components/profile/Profile';
import HeaderUserMenu from './components/header-user-menu/HeaderUserMenu';
import Dialogs from './components/dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
return (
    <BrowserRouter>
      <div className='appGridContainer' >
        <header className='appHeader'>
          <div className='appLogo'>rulenko.com</div>
          <div className='searchForm'>( 2 ) search</div>
          <HeaderUserMenu />
        </header>

        <div className='appSideBarLeft'>
          <Menu />
        </div>

        <div className='appContent'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>

        <div className='appSideBarRight'>

        </div>

        <footer className='appFooter'>
          <a href='https://rulenko.com/' target='_blank' >rulenko.com </a> https://icons8.com
        </footer>
      </div>
    </BrowserRouter>
    
  );
}



export default App;
