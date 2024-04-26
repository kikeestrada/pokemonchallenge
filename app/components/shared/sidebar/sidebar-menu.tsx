import { SidebarHeader } from './sidebar-header';
import { Plane } from 'lucide-react';
import { SidebarMenuData } from '~/data';
import { useLocation } from '@remix-run/react';
import { SidebarMenuItem } from './sidebar-menu-item';
import { MenuItemGroup } from './sidebar-menu-item-group';

export const SidebarMenu = () => {
  const location = useLocation();
  return (
    <div className="fixed min-h-screen w-[300px] min-w-[300px] border-r p-4">
      <SidebarHeader />
      {SidebarMenuData.map((data) => (
        <MenuItemGroup title={data.title} key={data.title}>
          {data.items.map((item) => (
            <SidebarMenuItem
              {...item}
              icon={<Plane />}
              isActive={item.url === location.pathname}
              key={item.url}
            />
          ))}
        </MenuItemGroup>
      ))}
    </div>
  );
};
