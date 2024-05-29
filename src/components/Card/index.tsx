import React from "react";
import dayjs from "dayjs";
import styles from "./index.module.scss";
import { INewsData } from "../../interfaces";

interface ICardProps extends INewsData {
  onClick?: () => void; // Declaring the onClick handler type
  primary?: boolean;
  outline?: boolean;
  children?: React.ReactNode;
}

const Card = ({
  onClick,
  primary,
  outline,
  children,
  ...props
}: ICardProps) => {
  return (
    <div className={styles["article-card"]}>
      <div className={styles["image-wrapper"]}>
        {props.image.length > 0 && <img src={props.image} alt="article" />}
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.source}</p>
        <a href={props.url}>Read more</a>
        {props.time && (
          <time dateTime={props.time}>
            {dayjs(props.time).format("DD MMMM YYYY, HH:mm")}
          </time>
        )}
      </div>
    </div>
  );
};

export default Card;
