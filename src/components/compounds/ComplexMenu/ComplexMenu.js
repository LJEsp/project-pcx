import React from "react";
import styled from "styled-components";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { ButtonMixedHorizontal } from "components/elements";

const S = {};

S.ComplexMenu = styled.div``;

const ComplexMenu = props => {
  return (
    <S.ComplexMenu>
      <ButtonMixedHorizontal
        icon={faBars}
        iconSize="lg"
        iconEnd={faAngleDown}
        variant="secondary"
        size="big"
      >
        Browse Categories
      </ButtonMixedHorizontal>
    </S.ComplexMenu>
  );
};

export default ComplexMenu;
