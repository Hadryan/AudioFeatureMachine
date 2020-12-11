import React, { ReactElement } from "react";
import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
  readonly text: string;
}

const NavigationItem: React.FC<NavigationItemProps> = (
  props: NavigationItemProps
): ReactElement => {
  const { text } = props;
  return <nav className={styles.navigationItem}>{text}</nav>;
};

export default NavigationItem;
