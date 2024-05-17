import styled, { css } from "styled-components";
import { ColorTheme } from "../themes/type";

export const Button = styled.button<{ $primary?: boolean; theme: ColorTheme }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: ${(props) => props.theme.primary};
      color: white;
    `};
`;
