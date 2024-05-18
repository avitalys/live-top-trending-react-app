import styled from "styled-components";
import { ColorTheme } from "../themes/type";

const Footer = styled.footer<{ $primary?: boolean; theme: ColorTheme }>`
  background-color: ${(props) => props.theme.footer};
  color: ${(props) => props.theme.lightText};
  padding: 20px;
  text-align: center;
`;

<footer>
  <p>&copy; 2024 avitalys/Live-Top-Trending App. All rights reserved.</p>
</footer>;
export default Footer;
