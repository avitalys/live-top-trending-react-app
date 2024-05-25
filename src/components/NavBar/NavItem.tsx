import { ReactNode } from "react";
import styles from "./index.module.scss";

export interface INavItemProps {
  text?: string;
  href?: string;
  children?: ReactNode;
}

function NavItem({ text, href, children }: INavItemProps) {
  return (
    <li className={styles["navbar-items"]}>
      <a href={href}>{text}</a>
      {children}
    </li>
  );
}

export default NavItem;
