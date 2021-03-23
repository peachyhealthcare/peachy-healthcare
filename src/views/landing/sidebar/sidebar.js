import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.scss';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <NavLink
          className={styles.link}
          to="/profile"
          activeClassName={styles.selected}
        >
          Login
        </NavLink>

        <NavLink
          className={styles.link}
          to="/notifications"
          activeClassName={styles.selected}
        >
          Register
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;
