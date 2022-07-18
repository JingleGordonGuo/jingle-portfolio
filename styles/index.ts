import { createGlobalStyle, css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fullScreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledGlobalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    border: unset;
    background-color: unset;
    cursor: pointer;
  }

  section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    scroll-snap-align: start;
    padding: 12px;
  }

  main {
    ${fullScreen}
    overflow: hidden;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${StyledGlobalStyle}
`;
