import React from 'react';
import './MyNavbar.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // defined variable you will see in dom
  render() {
    // const { isAuthed } = this.props.isAuthed;
    const { isAuthed, logoutClickEvent } = this.props;
    const buildNavbar = () => {
      if (isAuthed) {
        return (
        <Nav className='ml-auto' navbar>
        <NavItem>
          <NavLink tag={RRNavLink} to='/friends'><i className="fas fa-user-friends fa-2x"></i></NavLink>
          </NavItem>
          {/* <NavItem>
          <NavLink tag={RRNavLink} to='/articles'><i class="far fa-newspaper fa-2x"></i></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/weather'><i class="fas fa-bolt fa-2x"></i></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/events'><i class="far fa-calendar-alt fa-2x"></i></NavLink>
          </NavItem> */}
          <NavItem>
          <NavLink tag={RRNavLink} to='/holidays'><i class="fas fa-comments fa-2x"></i></NavLink>
          </NavItem>
          <NavItem>
          <NavLink onClick={logoutClickEvent}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className='ml-auto' navbar />;
    };
    return (
      <div className="my-navbar">
         <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Holidays</NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* <Nav className="ml-auto" navbar>
              <NavItem>
                { isAuthed ? <NavLink onClick={logoutClickEvent}>Logout</NavLink> : ''}
              </NavItem>
            </Nav> */}
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
