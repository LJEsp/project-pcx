import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";

const S = {};

S.ButtonCombinationHorizontal = styled(Button)`
  display: flex;
  padding: var(--size-s) var(--size-m);

  & > .icon {
    margin-right: var(--size-s);
  }
`;

S.Icon = styled.span`
  width: var(--size-l);
`;

const ButtonCombinationHorizontal = props => {
  const { icon, iconSize } = props;

  return (
    <S.ButtonCombinationHorizontal {...props}>
      <S.Icon>
        <FontAwesomeIcon icon={icon} size={iconSize} />
      </S.Icon>

      {props.children}
    </S.ButtonCombinationHorizontal>
  );
};

export default ButtonCombinationHorizontal;
