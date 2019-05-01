import React from "react";
import styled from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { ButtonMixedHorizontal } from "components/elements";

const S = {};

S.WideMenuButton = styled.div`
  display: inline-block;
`;

const WideMenuButton = props => {
  const { icon, variant, isHovered, bind, children } = props;

  return (
    <S.WideMenuButton {...bind} {...props}>
      <ButtonMixedHorizontal
        icon={icon}
        iconEnd={faAngleDown}
        iconSize="lg"
        variant={variant}
        size="big"
        isHovered={isHovered}
      >
        {children}
      </ButtonMixedHorizontal>
    </S.WideMenuButton>
  );
};

export default WideMenuButton;
