import React from "react";
import Styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
const Sidebar = props => {
  let SidebarClasses = Styles.SidebarContainer;
  if (props.showSidebar) {
    SidebarClasses = `${Styles.SidebarContainer} ${Styles.close}`;
  }

  return (
    <React.Fragment>
      <div className={Styles.containerNavigation}>
        <button className={Styles.spanContainer} onClick={props.openSidebar}>
          <span className={Styles.spanLine} />
          <span className={Styles.spanLine} />
          <span className={Styles.spanLine} />
        </button>
        <div className={SidebarClasses}>
          <ul className={Styles.SidebarList}>
            <li className={Styles.SidebarItem}>
              <Link to="/">Image</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/notification">Notification</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/icon">Icon</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/signin">Sign</Link>
            </li>
          </ul>
          <ul className={Styles.SidebarList}>
            <li className={Styles.SidebarItem}>
              <Link to="/">Image</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/notification">Notification</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/icon">Icon</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/signin">Sign</Link>
            </li>
          </ul>
          <ul className={Styles.SidebarList}>
            <li className={Styles.SidebarItem}>
              <Link to="/">Image</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/notification">Notification</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/icon">Icon</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/signin">Sign</Link>
            </li>
          </ul>
          <ul className={Styles.SidebarList}>
            <li className={Styles.SidebarItem}>
              <Link to="/">Image</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/notification">Notification</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/icon">Icon</Link>
            </li>
            <li className={Styles.SidebarItem}>
              <Link to="/signin">Sign</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
