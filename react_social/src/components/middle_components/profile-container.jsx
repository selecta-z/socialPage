import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

import Profile from './profile';
import { setUserProfile } from '../redux/profile_reducer';

class ProfileContainer extends Component {

    componentDidMount(){
        debugger
        let userId = this.props.router.params.userId

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then( (res) => {
            this.props.setUserProfile(
                res.data
            )
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));
