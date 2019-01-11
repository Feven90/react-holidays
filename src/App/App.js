import React from 'react';
// import logo from './logo.svg';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import Friends from '../components/pages/Friends/Friends';
import Holidays from '../components/pages/Holidays/Holidays';
// import NewFriend from '../components/pages/NewFriend/NewFriend';
// import Messages from '../components/pages/Messages/Messages';
// import Events from '../components/pages/Events/Events';
import './App.scss';
// import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};
const PrivateRouteFriends = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRouteHolidays = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};
// const PrivateRouteNewFriend = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = props => (authed === true
//     ? (<Component { ...props } />)
//     : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };
// const PrivateRouteWeather = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = props => (authed === true
//     ? (<Component { ...props } />)
//     : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };
// const PrivateRouteEvents = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = props => (authed === true
//     ? (<Component { ...props } />)
//     : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };
// const PrivateRouteMessages = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = props => (authed === true
//     ? (<Component { ...props } />)
//     : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };

class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  // isAuthenticated = () => {
  //   this.setState({ authed: true });
  // }

  render() {
    const { authed, pendingUser } = this.state;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
        <React.Fragment>
          <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
            <div className="appContainer">
            <div className='row'>
              <Switch>
                <PrivateRoute path='/' exact component={Home} authed={this.state.authed} />
                <PrivateRoute path='/home' component={Home} authed={this.state.authed} />
                {/* <PrivateRoute2 path='/friends' component={Friends} authed={this.state.authed} />
                <PrivateRouteArticles path='/articles' component={Articles} authed={this.state.authed} /> */} */}
                 {/* <PrivateRouteNewFriend path='/friends/new' component={NewFriend} authed={this.state.authed} />  */}
                <PrivateRouteHolidays path='/holidays' component={Holidays} authed={this.state.authed} />
                <PrivateRouteFriends path='/friends' component={Friends} authed={this.state.authed} />
                <PublicRoute path='/auth' component={Auth} authed={this.state.authed} />
              </Switch>
              </div>
              </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
