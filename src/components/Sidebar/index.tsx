import React, { ReactElement, useState } from "react";
import { AiOutlineAudio, AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { SidebarItem } from "models/Sidebar.model";
import NavigationItem from "../NavigationItem";
import styles from "./Sidebar.module.css";

const sidebarItems: SidebarItem[] = [
  {
    id: "search",
    text: "Search",
    icon: <AiOutlineHome />,
  },
  {
    id: "songCompare",
    text: "Compare Songs",
    icon: <AiOutlineAudio />,
  },
  {
    id: "artistCompare",
    text: "Compare Artists",
    icon: <AiOutlineTeam />,
  },
];

const Sidebar: React.FC = (): ReactElement => {
  const [activeNavigationItemId, setActiveNavigationItemId] = useState<string>(
    sidebarItems[0].id
  );

  const handleItemClick = (itemId: string): void => {
    setActiveNavigationItemId(itemId);
  };

  return (
    <aside className={styles.sidebar}>
      {sidebarItems.map(({ id, text, icon }: SidebarItem) => (
        <NavigationItem
          icon={icon}
          text={text}
          onItemClick={() => handleItemClick(id)}
          active={activeNavigationItemId === id}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
