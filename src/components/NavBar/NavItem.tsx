import { INavItemProps } from "../../interfaces";
import styles from "./index.module.scss";

function NavItem({ text, href, children }: INavItemProps) {
  return (
    <li className={styles["navbar-items"]}>
      <a href={href}>{text}</a>
      {children}
    </li>
  );
}

export default NavItem;
