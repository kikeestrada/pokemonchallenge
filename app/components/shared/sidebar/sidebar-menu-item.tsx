import { Link } from "@remix-run/react";
import { ReactNode } from "react";
import { MenuItem } from "~/interfaces";

interface Props extends MenuItem {
  icon?: ReactNode;
}

export const SidebarMenuItem = ({ icon, isActive, title, url }: Props) => {
  return (
    <Link
      to={url}
      className={`flex cursor-pointer gap-2 transition hover:bg-accent bg-${isActive ? "accent" : "white"} px-4 py-2 text-sm text-gray-400`}
    >
      {icon}
      {title}
    </Link>
  );
};
