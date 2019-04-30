import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";

const S = {};

S.ButtonMixedHorizontal = styled(Button)`
  display: flex;
  /* padding-left: var(--size-s); */
`;

S.Icon = styled.span`
  /* width: var(--size-l); */
  padding-right: var(--size-s);
`;

const ButtonMixedHorizontal = props => {
  const { icon, iconSize } = props;

  return (
    <S.ButtonMixedHorizontal {...props}>
      <S.Icon>
        <FontAwesomeIcon icon={icon} size={iconSize} />
      </S.Icon>

      <span>{props.children}</span>
    </S.ButtonMixedHorizontal>
  );
};

export default ButtonMixedHorizontal;
