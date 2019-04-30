import React from "react";
import styled from "styled-components";

import { ComplexMenu } from "components/compounds";

const S = {};

S.NavBar = styled.div``;

const NavBar = props => {
  return (
    <S.NavBar>
      <ComplexMenu />
    </S.NavBar>
  );
};

export default NavBar;
