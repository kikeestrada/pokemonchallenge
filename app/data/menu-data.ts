import { MenuGroup, MenuItem } from '~/interfaces/menu-item';

export const starWarsMenuData: MenuItem[] = [
  { url: '/', title: 'Home' },
  { url: '/people', title: 'People', isActive: false },
  { url: '/planets', title: 'Planets', isActive: false },
  { url: '/films', title: 'Films', isActive: false },
  { url: '/species', title: 'Species', isActive: false },
  { url: '/vehicles', title: 'Vehicles', isActive: false },
  { url: '/starships', title: 'Starships', isActive: false },
  { url: '/pokemon', title: 'Pokemon Test', isActive: false },
];

export const StarWarsSidebarMenu: MenuGroup = {
  title: 'Star Wars',
  items: starWarsMenuData,
};

export const uiMenuData: MenuItem[] = [
  { url: '/responsive', title: 'Responsive', isActive: false },
  { url: '/parallax', title: 'Parallax', isActive: false },
];

export const UISidebarMenuData: MenuGroup = {
  title: 'UI Challenges',
  items: uiMenuData,
};

export const SidebarMenuData: MenuGroup[] = [
  StarWarsSidebarMenu,
  UISidebarMenuData,
];
