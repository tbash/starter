import { injectGlobal } from 'styled-components';

export const colors = {
  PRIMARY:   "",
  SECONDARY: "",
}

/* eslint no-unused-expressions: 0 */
injectGlobal`
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  button,
  input {
    border: 0;
    padding: 0;
    color: inherit;
    background-color: inherit;
  }
`;
