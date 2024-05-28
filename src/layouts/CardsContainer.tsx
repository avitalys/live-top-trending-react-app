import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "../components/Card";

export interface INewsData {
  title: string;
  image: string;
  url: string;
  source: string;
  time: string;
}
//
const getNews = (category = "Technology", count = 5): Promise<INewsData[]> => {
  return axios
    .get<INewsData[]>(
      `http://localhost:8000/news/${category.toLowerCase()}/${count}`
    )
    .then((res) => res.data);
};

const CardsContainer = ({ category = "Technology" }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["news", category],
    queryFn: () => getNews(category),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) return "Loading...";

  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      <div>{category}</div>
      <div className="content">
        {data?.map((item) => {
          return <Card {...item} key={item.title.slice(0, 10)} />;
        })}
      </div>
    </>
  );
};

export default CardsContainer;
