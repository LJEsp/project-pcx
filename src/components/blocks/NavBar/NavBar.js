import React from "react";
import styled from "styled-components";

import { ComplexMenu } from "components/compounds";
import { InnerWidth } from "components/layouts";
import categoriesMenu from "./categoriesMenu";

const S = {};

S.InnerWidth = styled(InnerWidth)``;

S.NavBar = styled.div``;

const NavBar = props => {
  return (
    <S.NavBar>
      <InnerWidth>
        <ComplexMenu menu={categoriesMenu} />
      </InnerWidth>
    </S.NavBar>
  );
};

export default NavBar;
