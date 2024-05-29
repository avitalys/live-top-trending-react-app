import React from "react";
import styles from "./index.module.scss";
import { IFooterProps } from "../../interfaces";

const Footer = ({ children }: IFooterProps) => {
  return <footer className={styles["footer"]}>{children}</footer>;
};

export default Footer;
