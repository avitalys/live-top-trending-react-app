import { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface IScrollMenuProps<T> {
  menuItems: Array<T>;
  onMenuItemSelected: (arg: T) => void;
}

const ScrollMenu = ({
  menuItems,
  onMenuItemSelected,
}: IScrollMenuProps<string>) => {
  const [selected, setSelected] = useState(menuItems[0]);

  const onClickHnadler = (item: string) => {
    setSelected(item);
    onMenuItemSelected(item);
  };

  return (
    <div className={styles["scrollmenu"]}>
      {menuItems.map((item, index) => {
        const selectedClass = classNames({
          [styles["selected"]]: item === selected,
        });
        return (
          <button
            tabIndex={index}
            key={item}
            className={selectedClass}
            onClick={() => onClickHnadler(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ScrollMenu;
