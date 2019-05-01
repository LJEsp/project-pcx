import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useTransition, config } from "react-spring";
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
  const { menu } = props;
  const [isHovered, setIsHovered] = useState(false);

  const transitions = useTransition(isHovered, null, {
    from: { position: "absolute", opacity: 0, transform: "translateY(-2rem)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-2rem)" }
  });

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
        Browse Categories
      </S.ButtonMixedHorizontal>

      {transitions.map(
        ({ item, key, props }) =>
          item && <S.ComplexMenuList menu={menu} key={key} style={props} />
      )}
    </S.ComplexMenu>
  );
};

ComplexMenu.defaultProps = {
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
