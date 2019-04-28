import React from "react";
import "destyle.css";
import { ThemeProvider } from "styled-components";

import { Button } from "components/elements";
import { Input } from "components/elements/form";
import SearchBox from "components/blocks/SearchBox/SearchBox";

import { theme, GlobalStyle } from "styling";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Button>Button</Button>
        <Input />
        <SearchBox />
      </>
    </ThemeProvider>
  );
}

export default App;
