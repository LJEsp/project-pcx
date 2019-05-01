import React, { useState } from "react";
import styled, { css } from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { ButtonMixedHorizontal } from "components/elements";
import ComplexMenuSubMenu from "./ComplexMenuSubMenu";

const S = {};

S.ComplexMenuItem = styled.div``;

S.ComplexMenuSubMenu = styled(ComplexMenuSubMenu)`
  position: absolute;
  left: 100%;
  top: 0;
`;

S.ButtonMixedHorizontal = styled(ButtonMixedHorizontal)`
  ${p =>
    p.isHovered &&
    css`
      background-color: ${p => p.theme.color.grey.lightHover};
    `}
`;

const ComplexMenuItem = props => {
  const { item } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.ComplexMenuItem onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <S.ButtonMixedHorizontal
        icon={item.icon}
        iconSize="lg"
        iconEnd={item.subMenu && faAngleRight}
        variant="light"
        size="big"
        full
        vertical
        isHovered={isHovered}
      >
        {item.label}
      </S.ButtonMixedHorizontal>

      {item.subMenu && isHovered && (
        <S.ComplexMenuSubMenu menu={item.subMenu} />
      )}
    </S.ComplexMenuItem>
  );
};

export default ComplexMenuItem;
