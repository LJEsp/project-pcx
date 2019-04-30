import React from "react";
import styled from "styled-components";

import { Header, TopBar } from "components/compositions";

const S = {};

S.Index = styled.div`
`

const Index = () => {
  return (
    <S.Index>
      <TopBar />
      <Header />
    </S.Index>
  );
};

export default Index;
