export interface MenuItem {
  active: boolean;
  title?: string;
  icon?: string;
  link?: string;
  color?: string;
  hideFor?: string;
  expanded?: boolean;
  subMenu?: MenuItem[];
}

export type Menu = MenuItem[];
