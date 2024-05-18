import styled from "styled-components";
import { ColorTheme } from "../themes/type";

const Container = styled.div<{ $primary?: boolean; theme: ColorTheme }>`
    display: 'flex';
    flex-direction: row;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}`;

const ImageWrapper = styled.div<{ $primary?: boolean; theme: ColorTheme }>`
    flex: 1;
    padding: 16px;
    padding-bottom: 0;
}`;

const ContentWrapper = styled.div<{ $primary?: boolean; theme: ColorTheme }>`
    flex: 2;
    padding: 16px;
}`;

const Title = styled.h2<{ $primary?: boolean; theme: ColorTheme }>`
    font-size: 20px;
    margin-bottom: 8px;
}`;

const Link = styled.a<{ $primary?: boolean; theme: ColorTheme }>`
    display: block;
    margin-top: 16px;
    color: blue;
    text-decoration: none;
}`;

const Time = styled.time<{ $primary?: boolean; theme: ColorTheme }>`
    font-style: italic;
    color: #666;
}`;

interface CardProps {
  title: string;
  image: string;
  url: string;
  source: string;
  time: string | undefined;
}

const Card = (props: CardProps) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={props.image} alt="Vite logo" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{props.title}</Title>
        <p>{props.source}</p>
        <Link href={props.url}>Read more</Link>
        {props.time && <Time dateTime={props.time}>{props.time}</Time>}
      </ContentWrapper>
    </Container>
  );
};

export default Card;
