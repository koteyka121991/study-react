import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/preloader/Preloader';
import Header from './Header';
import axios from 'axios';
import { setAuthUserData } from '../../Redux/auth-reduser';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
    {withCredentials: true}).then(response => {
      if (response.data.resultCode === 0) {
        debugger
        let {id,email,login} = response.data.data;
        this.props.setAuthUserData(id,
          email,login);
      }
    });
  }
  render() {
    return <>
      <Header {...this.props} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
    
  }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);