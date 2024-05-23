import React from "react";
import styles from "./index.module.scss";

export interface IFooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: IFooterProps) => {
  return <footer className={styles["footer"]}>{children}</footer>;
};

export default Footer;
