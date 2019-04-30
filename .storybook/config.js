import { configure, addDecorator } from "@storybook/react";

import React from "react";
import { GlobalStyle, theme } from "../src/styling";
import { ThemeProvider } from "styled-components";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withStyled = cb => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {cb()}
    </>
  </ThemeProvider>
);

addDecorator(withStyled);

configure(loadStories, module);
