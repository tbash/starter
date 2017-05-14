import { injectGlobal } from 'styled-components';

export const colors = {
  PRIMARY:   "",
  SECONDARY: "",
  LIGHT:     "",
  DARK:      "",
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
    background-color: ${colors.LIGHT};
    color: ${colors.DARK};
  }
`;
