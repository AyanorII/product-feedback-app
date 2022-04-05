import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: "Jost", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }

  ul, ol, li {
    list-style: none;
  }

  .App {
    overflow-x: hidden;
    min-height: 100vh;
  }
`;
