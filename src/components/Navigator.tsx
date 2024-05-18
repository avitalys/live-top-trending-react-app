import styled from "styled-components";
import HeaderLink from "./HeaderLink";

interface INavProps {
  title: string | null;
  links: ILink[];
  //   theme: ColorTheme;
}

interface ILink {
  text: string;
  url: string;
}

const Navigator = ({ title, links }: INavProps) => {
  return (
    <NavContainer>
      <h1>{title}</h1>
      <Links>
        {links.map((link) => {
          return <HeaderLink text={link.text} url={link.url} key={link.text} />;
        })}
      </Links>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
   {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Links = styled.ul`
   {
    list-style: none;
    display: flex;
  }
`;

export default Navigator;
