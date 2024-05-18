import styled from "styled-components";
import { ColorTheme } from "../themes/type";

const Link = styled.a<{ theme: ColorTheme }>`
  text-decoration: none;
  color: ${(props) => props.theme.lightText};
`;

const ListItem = styled.li`
  margin-right: 20px;
`;

interface ITabsProps {
  text: string | null;
  url: string;
}

const HeaderLink = ({ text, url }: ITabsProps) => {
  return (
    <ListItem>
      <Link href={url}>{text}</Link>
    </ListItem>
  );
};
export default HeaderLink;
