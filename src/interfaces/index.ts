import { ReactNode } from "react";

export interface INewsData {
  title: string;
  image: string;
  url: string;
  source: string;
  time: string;
}

export interface INavItemProps {
  text?: string;
  href?: string;
  children?: ReactNode;
}

export interface IFooterProps {
  children: React.ReactNode;
}
