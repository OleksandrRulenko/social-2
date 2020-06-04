import React from 'react';
import UserMenu from './UserMenu';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer'

class UserMenuContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
    .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, email, login);  // (userId, email, login) Order as in authReducer.js
        }
    });  
  }

  render() {
    return <UserMenu {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  setAuthUserData
}) (UserMenuContainer);

