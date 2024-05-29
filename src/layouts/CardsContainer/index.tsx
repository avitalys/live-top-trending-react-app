import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card";
import styles from "./index.module.scss";
import { getNews } from "../../api/news";

const CardsContainer = ({ category = "Technology", count = 5 }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["news", category, count],
    queryFn: () => getNews(category, count),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) return "Loading...";

  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      <div>{category}</div>
      <div className={styles["container"]}>
        {data?.map((item) => {
          return <Card {...item} key={item.title.slice(0, 10)} />;
        })}
      </div>
    </>
  );
};

export default CardsContainer;
