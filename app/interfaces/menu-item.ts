export interface MenuGroup {
  title: string;
  items: MenuItem[];
}
export interface MenuItem {
  url: string;
  title: string;
  isActive?: boolean;
}
