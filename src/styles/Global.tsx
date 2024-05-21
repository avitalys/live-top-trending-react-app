import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

    /* Body styles */
    body {
      font-family: "Roboto", sans-serif;
      background-color:${(props) => props.theme.background};
      color: #333; ${(props) => props.theme.text};
    }
`;

export default Global;
