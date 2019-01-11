import React from 'react';
// import PropTypes from 'prop-types';
import authRequests from '../../../helpers/data/authRequests';
import googlebutton from './images/googlebutton.png';
import './Auth.scss';

class Auth extends React.Component {
  // static propTypes = {
  //   isAuthenticated: PropTypes.func,
  // }

  authenticateUser = (e) => {
    e.preventDefault(); // telling it to do only specific thing not the default of click event
    authRequests.authenticate().then((res) => {
      // const user = res.additionalUserInfo.username;
      // this.props.isAuthenticated(user);
      this.props.history.push('/home');
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
        <div className="Auth">
          <button className="btn btn-danger" onClick={this.authenticateUser}>
            <img src={googlebutton} className="google" alt="google login button" />
          </button>
        </div>
    );
  }
}

export default Auth;
