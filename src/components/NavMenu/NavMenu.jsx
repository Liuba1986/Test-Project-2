import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <Link to="/">Main</Link>
      <Link to="/users">Users</Link>
      <Link to="/products">Products</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/cristina">Cristina</Link>
    </div>
  );
}
