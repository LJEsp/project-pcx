import { configure, addDecorator } from "@storybook/react";

import React from "react";
import { GlobalStyle, theme } from "../src/styling";
import { ThemeProvider } from "styled-components";

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withStyled = cb => (
  <ThemeProvider theme={theme}>
    <div style={{ margin: "1rem" }}>
      <GlobalStyle />
      {cb()}
    </div>
  </ThemeProvider>
);

addDecorator(withStyled);

configure(loadStories, module);
