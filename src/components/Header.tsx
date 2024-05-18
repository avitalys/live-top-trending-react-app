import styled from "styled-components";
import { ColorTheme } from "../themes/type";
import Navigator from "./Navigator";

const links = [
  { text: "Home", url: "#" },
  { text: "Repo", url: "#" },
  { text: "Categories", url: "#" },
  { text: "About", url: "#" },
];

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Navigator
          title="Trendy Meter"
          links={links}
          //   theme={theme}
        />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ theme: ColorTheme }>`{
    background-color: ${(props) => props.theme.primary},
    color: ${(props) => props.theme.lightText},
    padding: 10px;
  }`;

const Container = styled.div<{ theme: ColorTheme }>`{
    background-color: ${(props) => props.theme.primary},
    color: ${(props) => props.theme.lightText},
    padding: 10px;
  }`;

export default Header;
