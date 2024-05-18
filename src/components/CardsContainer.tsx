import styled from "styled-components";
import { ColorTheme } from "../themes/type";
import Card from "./Card";

const Container = styled.div<{ theme: ColorTheme }>`
  padding: 20px;
`;

const data = [
  {
    title:
      "OpenAI’s new GPT-4o model offers promise of improved smartphone assistants  OpenAI’s new GPT-4o model offers promise of improved smartphone assistants",
    image:
      "https://i.guim.co.uk/img/media/a043de08a6156dde538cdd6e00c76affe13506ac/0_0_4592_2755/master/4592.jpg?width=300&quality=85&auto=format&fit=max&s=faf7cbc28ad5a80851fa6c76ee5281ba",
    url: "https://www.theguardian.com/technology/article/2024/may/14/openai-gpt-4o-model-offers-promise-of-improved-smartphone-assistants",
    source: "guardian",
    time: "2024-05-14T18:00:00+0000",
  },
  {
    title:
      "Law professor says Tesla threatened to fire law firm over Musk’s huge payout  Law professor says Tesla threatened to fire law firm over Musk’s huge payout",
    image:
      "https://i.guim.co.uk/img/media/bd8360c30b7f18b9bdfb00034e08d2b5b86ea930/0_34_5500_3300/master/5500.jpg?width=300&quality=85&auto=format&fit=max&s=dd23cd2c5b8552e9f1f9726a92b693b8",
    url: "https://www.theguardian.com/technology/article/2024/may/14/elon-musk-payout-threaten-law-firm",
    source: "guardian",
    time: "2024-05-14T15:59:09+0000",
  },
  {
    title:
      "Amazon Web Services chief to step down, veteran named successor  Amazon Web Services chief to step down, veteran named successor",
    image:
      "https://i.guim.co.uk/img/media/27d4097d4bac0aea5931af48aa9cc9cb0b0e60cc/0_19_3500_2101/master/3500.jpg?width=300&quality=85&auto=format&fit=max&s=ed3547155183310d1acc941524ae2098",
    url: "https://www.theguardian.com/technology/article/2024/may/14/adam-selipsky-steps-down-amazon-web-services",
    source: "guardian",
    time: "2024-05-14T15:35:51+0000",
  },
  {
    title: "OpenAI Unveils New ChatGPT That Listens, Looks and Talks",
    image:
      "https://static01.nyt.com/images/2024/05/13/multimedia/OPENAI-DEMO-hkfl/OPENAI-DEMO-hkfl-thumbLarge.jpg?auto=webp",
    url: "https://www.nytimes.com/2024/05/13/technology/openai-chatgpt-app.html",
    source: "nyt",
    time: "",
  },
  {
    title: "Elon Musk’s Diplomacy: Woo Right-Wing World Leaders. Then Benefit.",
    image:
      "https://static01.nyt.com/images/2024/05/10/business/00musk-leaders-SUB/00musk-leaders-SUB-thumbLarge.jpg?auto=webp",
    url: "https://www.nytimes.com/2024/05/12/technology/elon-musk-world-leaders.html",
    source: "nyt",
    time: "",
  },
  {
    title: "Meet My A.I. FriendsA.I.’s ‘Her’ Era Has Arrived",
    image:
      "https://static01.nyt.com/images/2024/05/12/business/12AI-Friends-cover-illo-sub/12AI-Friends-cover-illo-sub-thumbLarge-v2.jpg?auto=webp",
    url: "https://www.nytimes.com/2024/05/09/technology/meet-my-ai-friends.html",
    source: "nyt",
    time: "",
  },
  {
    title:
      "The US Army could not survive for long in a Ukraine level drone war\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\n\t\t\t\t\t\t\t\t\n\t\n\t\n\t\n\n\t\t\t\t\t\t\t\n\n\t\t\t\t\n\t\t\t\tDavid Axe",
    image:
      "https://www.telegraph.co.uk//content/dam/david-axe.PNG?impolicy=byline-author",
    url: "https://www.telegraph.co.uk/news/2024/05/14/ukraine-war-us-army-drone-threat-shorad-air-defence/",
    source: "telegraph",
    time: "2024-05-14T05:44:00.000+01:00",
  },
  {
    title:
      "Soaring demand from power-hungry AI is derailing Biden’s green energy transition\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\n\t\t\t\t\t\t\t\t\n\t\n\t\n\t\n\n\t\t\t\t\t\t\t\n\n\t\t\t\t\n\t\t\t\tDavid Blackmon",
    image:
      "https://www.telegraph.co.uk//content/dam/Author%20photos/David%20Blackmon%20Headshot3%202022.png?impolicy=byline-author",
    url: "https://www.telegraph.co.uk/us/comment/2024/05/13/green-energy-transition-ai-power-demand-electricity/",
    source: "telegraph",
    time: "2024-05-13T16:53:25.427+01:00",
  },
  {
    title:
      "‘Elon Musk of Essex’ prepares to call in administrators\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\n\n\t\t\t\t\n\t\t\t\tMichael Bow",
    image:
      "https://www.telegraph.co.uk//content/dam/business/2024/05/13/TELEMMGLPICT000280230507_17156056984790_trans_NvBQzQNjv4BqvMovkhi9vA9DrOu9fvFDur04F00Gt5mhhqWWFCBu6qg.jpeg?imwidth=350",
    url: "https://www.telegraph.co.uk/business/2024/05/13/elon-musk-of-essex-prepares-to-call-in-administrators/",
    source: "telegraph",
    time: "2024-05-13T14:33:54.413+01:00",
  },
];

const CardsContainer = () => {
  return (
    <Container>
      {data.map((item) => {
        return <Card {...item} key={item.title.slice(0, 10)} />;
      })}
    </Container>
  );
};

export default CardsContainer;