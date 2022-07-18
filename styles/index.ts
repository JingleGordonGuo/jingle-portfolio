import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  position: fixed;
  height: 100%;
  overflow: scroll;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
