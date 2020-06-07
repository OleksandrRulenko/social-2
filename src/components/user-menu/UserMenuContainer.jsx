import React from 'react';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import {getAuthUserData} from '../../redux/authReducer'

class UserMenuContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
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
  getAuthUserData
}) (UserMenuContainer);

