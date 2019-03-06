import React from "react";
import Styles from "./profile.module.scss";
import { Link } from "react-router-dom";
const Profile = props => {
  let ProfileClasses = Styles.ProfileContainer;
  if (props.showProfile) {
    ProfileClasses = `${Styles.ProfileContainer} ${Styles.close}`;
  }
  return (
    <React.Fragment>
      <div className={Styles.profileIcon} onClick={props.openProfile}>
        P
        <div className={ProfileClasses}>
          <ul className={Styles.ProfileList}>
            <li className={Styles.ProfileItem}>
              <Link to="/profile">Profile</Link>
            </li>
            <li className={Styles.ProfileItem}>
              <Link to="/saved">Saved</Link>
            </li>
            <li className={Styles.ProfileItem}>
              <Link to="/transactions">Transactions</Link>
            </li>
            <li className={Styles.ProfileItem}>
              <Link to="/settings">Settings</Link>
            </li>
            <li className={Styles.ProfileItem}>
              <Link to="/offers">Offers</Link>
            </li>
            <li className={Styles.ProfileItem}>
              <Link to="/careers">Careers</Link>
            </li>
            <li className={Styles.ProfileItem}>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Profile;
