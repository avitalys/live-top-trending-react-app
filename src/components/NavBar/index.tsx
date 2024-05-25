import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import NavItem, { INavItemProps } from "./NavItem";
// import NavBarBrand from "./NavItem";

export interface INavBarProps {
  brand: INavBarBrand;
  items?: Array<INavItemProps>;
  outline?: boolean;
  children?: ReactNode;
}

export interface INavBarBrand {
  title: string;
  href?: string;
  image?: string;
}

const NavBar = ({ brand, items, outline, children }: INavBarProps) => {
  const buttonClasses = classNames(styles["navbar"], {
    [styles["navbar-outline"]]: outline,
  });

  return (
    <header>
      <nav className={buttonClasses}>
        <div className={styles["logo"]}>
          {brand.image && (
            <img
              className={styles["logo-image"]}
              src={brand.image}
              alt="Logo"
            />
          )}
          <h1 className={styles["brand-name"]}>{brand.title}</h1>
        </div>
        <ul>
          {items?.map((item) => {
            return (
              <NavItem text={item.text} href={item.href} key={item.text} />
            );
          })}
          {children?.map((child, index) => {
            return <NavItem key={`navbar-child-${index}`}>{child}</NavItem>;
          })}
        </ul>

        <div className={styles["hamburger-menu"]}>
          <div className={styles["icon"]}>&#9776;</div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
