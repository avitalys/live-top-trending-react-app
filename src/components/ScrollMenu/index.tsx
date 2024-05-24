import { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { catogeries } from "../../consts";

const ScrollMenu = () => {
  const [selected, setSelected] = useState("Buisness");

  return (
    <div className={styles["scrollmenu"]}>
      {catogeries.map((item, index) => {
        const selectedClass = classNames({
          [styles["selected"]]: item === selected,
        });
        return (
          <button
            tabIndex={index}
            key={item}
            className={selectedClass}
            onClick={() => setSelected(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ScrollMenu;
