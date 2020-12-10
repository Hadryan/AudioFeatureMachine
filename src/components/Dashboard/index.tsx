import React, { ReactElement } from "react";
import Searchbar from "../Searchbar";
import styles from "./dashboard.module.css";

const Dashboard: React.FC = (): ReactElement => {
  return (
    <main className={styles.dashboard}>
      <section className={styles.content}>
        <Searchbar />
      </section>
      <section className={styles.sidebar}>sidebar</section>
    </main>
  );
};

export default Dashboard;
