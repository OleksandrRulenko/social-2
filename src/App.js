import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import HeaderUserMenu from './components/header-user-menu/HeaderUserMenu';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';

const App = (props) => {

return (
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
        <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
        <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
        <Route path='/users' render={ () => <UsersContainer /> }/>
      </div>

      <div className='appSideBarRight'>

      </div>

      <footer className='appFooter'>
        <a href='https://rulenko.com/' target='_blank' >rulenko.com </a> https://icons8.com
      </footer>
    </div> 
  );
} 



export default App;
