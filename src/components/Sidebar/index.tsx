import React, { ReactElement } from "react";
import NavigationItem from "../NavigationItem";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = (): ReactElement => {
  return (
    <aside className={styles.sidebar}>
      <NavigationItem text="Home" />
      <NavigationItem text="Search" />
      <NavigationItem text="Compare" />
    </aside>
  );
};

export default Sidebar;
