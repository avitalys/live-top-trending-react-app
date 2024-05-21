import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IButtonProps {
  onClick: () => void; // Declaring the onClick handler type
  primary?: boolean;
  children: React.ReactNode;
}

const Button = ({ onClick, primary, children }: IButtonProps) => {
  const buttonClasses = classNames(styles["btn"], {
    [styles["btn-primary"]]: primary,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
