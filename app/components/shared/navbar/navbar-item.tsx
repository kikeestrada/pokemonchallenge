import { clsx } from "clsx";
import { Link } from "@remix-run/react";
import { MenuItem } from "~/interfaces";

export const NavbarItem = ({ isActive, url, title }: MenuItem) => {
  return (
    <div>
      <Link key={url} to={url}>
        <button
          value={title}
          className={clsx("mx-2 rounded-md px-5 py-1", {
            "bg-white text-black shadow-md": isActive,
            "bg-accent": !isActive,
          })}
        >
          {title}
        </button>
      </Link>
    </div>
  );
};
