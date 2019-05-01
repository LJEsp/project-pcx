import React from "react";
import styled from "styled-components";

import { Header, TopBar, NavBar } from "components/blocks";

const S = {};

S.Index = styled.div``;

S.TopBar = styled(TopBar)`
  margin-bottom: var(--size-base);
`;

S.Header = styled(Header)`
  margin-bottom: var(--size-base);
`;

const Index = () => {
  return (
    <S.Index>
      <S.TopBar />
      <S.Header />
      <NavBar />
    </S.Index>
  );
};

export default Index;
