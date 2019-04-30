import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";

const S = {};

S.ButtonMixedHorizontal = styled(Button)`
  display: flex;
  align-items: center;
`;

S.Label = styled.span`
  ${p =>
    p.iconEnd &&
    css`
      margin-right: var(--size-base);
    `}
`;

S.Icon = styled.span`
  /* width: var(--size-l); */
  padding-right: var(--size-s);
`;

const ButtonMixedHorizontal = props => {
  const { icon, iconSize, iconEnd } = props;

  return (
    <S.ButtonMixedHorizontal {...props}>
      <S.Icon>
        <FontAwesomeIcon icon={icon} size={iconSize} />
      </S.Icon>

      <S.Label {...props}>{props.children}</S.Label>

      {iconEnd && <FontAwesomeIcon icon={iconEnd} size={iconSize} />}
    </S.ButtonMixedHorizontal>
  );
};

export default ButtonMixedHorizontal;
