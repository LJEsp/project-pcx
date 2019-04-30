import React from "react";
import styled from "styled-components";

import { Header, TopBar } from "components/compositions";

const S = {};

S.Index = styled.div``;

S.TopBar = styled(TopBar)`
  margin-bottom: var(--size-base);
`;

const Index = () => {
  return (
    <S.Index>
      <S.TopBar />
      <Header />
    </S.Index>
  );
};

export default Index;
