import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import UserMenuContainer from './components/user-menu/UserMenuContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';

const App = (props) => {

return (
    <div className='appGridContainer' >
      <header className='appHeader'>
        <div className='appLogo'>rulenko.com</div>
        <div className='searchForm'>( 2 ) search</div>
        <UserMenuContainer />
      </header>

      <div className='appSideBarLeft'>
        <Menu />
      </div>

      <div className='appContent'>
        <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
        <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
        <Route path='/users' render={ () => <UsersContainer /> }/>
        <Route path='/login' render={ () => <Login /> }/>
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
