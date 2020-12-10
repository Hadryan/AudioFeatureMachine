import React, { ReactElement } from "react";
import Searchbar from "../Searchbar";
import Sidebar from "../Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = (): ReactElement => {
  return (
    <main className={styles.dashboard}>
      <section className={styles.content}>
        <Searchbar />
      </section>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>
    </main>
  );
};

export default Dashboard;
