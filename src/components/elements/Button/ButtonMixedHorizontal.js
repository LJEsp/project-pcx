import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";

const S = {};

S.ButtonMixedHorizontal = styled(Button)`
  display: flex;
  padding: var(--size-s) var(--size-m);
  padding-left: var(--size-s);
`;

S.Icon = styled.span`
  width: var(--size-l);
`;

const ButtonMixedHorizontal = props => {
  const { icon, iconSize } = props;

  return (
    <S.ButtonMixedHorizontal {...props}>
      <S.Icon>
        <FontAwesomeIcon icon={icon} size={iconSize} />
      </S.Icon>

      {props.children}
    </S.ButtonMixedHorizontal>
  );
};

export default ButtonMixedHorizontal;
