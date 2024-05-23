import React from "react";
import styles from "./index.module.scss";

export interface INavItemProps {
  text: string;
  href: string;
}

function NavItem({ text, href }: INavItemProps) {
  return (
    <li className={styles["navbar-items"]}>
      <a href={href}>{text}</a>
    </li>
  );
}

export default NavItem;
