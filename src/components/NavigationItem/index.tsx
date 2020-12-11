import React, { ReactElement } from "react";
import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
  readonly text: string;
  readonly icon: JSX.Element;
  readonly onItemClick: VoidFunction;
  readonly active: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = (
  props: NavigationItemProps
): ReactElement => {
  const { text, icon, onItemClick, active } = props;

  const activeItemStyles = active ? styles.activeNavigationItem : "";
  return (
    <nav
      className={`${styles.navigationItem} ${activeItemStyles}`}
      onClick={onItemClick}
    >
      <div className="iconContainer">{icon}</div>
      <div>{text}</div>
    </nav>
  );
};

export default NavigationItem;
