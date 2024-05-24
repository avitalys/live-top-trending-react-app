import React, { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

const catogeries = [
  "Buisness",
  "Culture",
  "Enviornment",
  "Food",
  "Games",
  "Health",
  "Music",
  "Science",
  "Sport",
  "Style",
  "Technology",
  "Travel",
];

const ScrollMenu = () => {
  const [selected, setSelected] = useState("Buisness");

  return (
    <div className={styles["scrollmenu"]}>
      {catogeries.map((item, index) => {
        const selectedClass = classNames({
          [styles["selected"]]: item === selected,
        });
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            role="button"
            tabIndex={index}
            key={item}
            className={selectedClass}
            onClick={() => setSelected(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollMenu;
