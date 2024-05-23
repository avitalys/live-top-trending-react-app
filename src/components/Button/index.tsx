import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IButtonProps {
  onClick: () => void; // Declaring the onClick handler type
  primary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  onClick,
  primary,
  disabled,
  outline,
  children,
}: IButtonProps) => {
  const buttonClasses = classNames(styles["btn"], {
    [styles["btn-primary"]]: primary,
    [styles["btn-outline"]]: outline,
  });

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
