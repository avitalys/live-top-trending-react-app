import axios from "axios";
import { INewsData } from "../../interfaces";

export const getNews = (
  category = "Technology",
  count = 5
): Promise<INewsData[]> => {
  return axios
    .get<INewsData[]>(
      `http://localhost:8000/news/${category.toLowerCase()}/${count}`
    )
    .then((res) => res.data);
};
