import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title: string;
}

export const MenuItemGroup = ({ children, title }: Props) => {
  return (
    <div className="my-5 flex grow flex-col border-b border-b-gray-400 pb-5 pt-2">
      <span className="text-md mb-5 text-sm text-gray-600">{title}</span>
      {children}
    </div>
  );
};
