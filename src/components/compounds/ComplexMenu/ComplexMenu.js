import React, { useState } from "react";
import styled, { css } from "styled-components";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { ButtonMixedHorizontal } from "components/elements";
import ComplexMenuList from "./components/ComplexMenuList";

const S = {};

S.ComplexMenu = styled.div`
  display: inline-block;
  position: relative;
`;

S.Wrapper = styled.div``;

S.ComplexMenuList = styled(ComplexMenuList)`
  position: absolute;
  top: var(--size-xl);
`;

S.ButtonMixedHorizontal = styled(ButtonMixedHorizontal)`
  position: relative;
  z-index: 10;

  ${p =>
    p.isHovered &&
    css`
      background-color: var(--this-color-hover);
    `}
`;

const ComplexMenu = props => {
  const { label, menu } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.ComplexMenu onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <S.ButtonMixedHorizontal
        icon={faBars}
        iconSize="lg"
        iconEnd={faAngleDown}
        variant="secondary"
        size="big"
        vertical
        isHovered={isHovered}
      >
        {label}
      </S.ButtonMixedHorizontal>

      {isHovered && <S.ComplexMenuList menu={menu} />}
    </S.ComplexMenu>
  );
};

ComplexMenu.defaultProps = {
  label: "Label",
  menu: [
    {
      label: "Menu 1",
      subMenu: [
        { label: "Sub menu 1" },
        { label: "Sub menu 2" },
        { label: "Sub menu 3" }
      ]
    },
    {
      label: "Menu 2"
    },
    {
      label: "Menu 3"
    }
  ]
};

export default ComplexMenu;
