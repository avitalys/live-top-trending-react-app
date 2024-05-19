import styled from "styled-components";
import { ColorTheme } from "../themes/type";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Container = styled.div<{ theme: ColorTheme }>`
  padding: 20px;
`;

const CardsContainer = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["trendingData"],
    queryFn: () =>
      axios.get("http://localhost:8000/news/travel/5").then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container>
      {data.map((item) => {
        return <Card {...item} key={item.title.slice(0, 10)} />;
      })}
    </Container>
  );
};

export default CardsContainer;
