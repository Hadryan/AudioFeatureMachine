import { IconType } from "react-icons/lib";

export interface SidebarItem {
  readonly id: string;
  readonly text: string;
  readonly icon: JSX.Element;
}
