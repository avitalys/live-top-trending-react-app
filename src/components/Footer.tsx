import styled from "styled-components";
import { ColorTheme } from "../themes/type";

const Footer = styled.footer<{ theme: ColorTheme }>`
  background-color: ${(props) => props.theme.footer};
  color: ${(props) => props.theme.lightText};
  padding: 20px;
  text-align: center;
`;

export default Footer;
