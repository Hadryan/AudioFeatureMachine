import React from "react";
import Searchbar from "../Searchbar";
import styles from './dashboard.module.css'

const Dashboard = () => {

  return (
    <div className={styles.dashboard}>
      <Searchbar />
    </div>
  );
};

export default Dashboard;
