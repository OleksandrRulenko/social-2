import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
 
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)  // Get user status
    }
    render() {
        return (
            <Profile 
                {...this.props} 
                profile={this.props.profile} 
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
    withRouter,
    //withAuthRedirect,  //hoc
) (ProfileContainer);