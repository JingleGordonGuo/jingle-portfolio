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

export const neumorphic = css`
  background: linear-gradient(145deg, #ffffff, #cccccc);
  box-shadow: 4px 4px 10px #bebebe, -4px -4px 10px #ffffff;
  &:hover {
    background: #eeeeee;
    box-shadow: 4px 4px 10px #bebebe, -4px -4px 10px #ffffff;
  }
  &:active {
    background: linear-gradient(145deg, #cccccc, #ffffff);
    box-shadow: 4px 4px 10px #bebebe, -4px -4px 10px #ffffff;
  }
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
    min-height: 100vh;
    /* scroll-snap-align: start; */
  }

  main {
    ${fullScreen}
    overflow: hidden;
    overflow-y: scroll;
    /* scroll-snap-type: y proximity;
    scroll-behavior: smooth; */
  }

  ul {
    margin: 0;
    padding: 0;
  }

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: calc(4vw + 1em);
    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: calc(2vw + 1em);
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  a {
    color: #0091ea;
    font-weight: 600;
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${StyledGlobalStyle}
`;
