import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.scss";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
class Navbar extends Component {
  state = { openSidebar: true, openProfile: true };

  toggleSidebar = () => {
    this.setState(prevState => {
      return { openSidebar: !prevState.openSidebar };
    });
  };
  toggleProfile = () => {
    this.setState(prevState => {
      return { openProfile: !prevState.openProfile };
    });
  };
  render() {
    return (
      <div className={Styles.containerNavbar}>
        <ul className={Styles.navbarList}>
          <li className={Styles.sidebar}>
            <Sidebar
              showSidebar={this.state.openSidebar}
              openSidebar={this.toggleSidebar}
            />
          </li>
          <li className={Styles.navbaritemImage}>
            <Link to="/">
              <img alt="" src="Images/logo.png" className={Styles.homepageIcone} />
            </Link>
          </li>
        </ul>
        <ul className={Styles.navbarList}>
          <div className={Styles.spacer} />

          <li className={Styles.navbarItemBell}>
            <i className="fas fa-bell fa-lg" />
          </li>
          <li className={Styles.navbarItemIcon}>
            <Profile
              showProfile={this.state.openProfile}
              openProfile={this.toggleProfile}
            />
          </li>

          <li className={Styles.navbarItemLogin}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
