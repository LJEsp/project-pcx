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

S.IconStart = styled.span`
  margin-right: var(--size-s);

  ${p =>
    p.vertical &&
    css`
      width: var(--size-l);
      margin-right: var(--size-m);
    `}
`;

S.IconEnd = styled(FontAwesomeIcon)`
  margin-left: auto;
`;

const ButtonMixedHorizontal = props => {
  const { icon, iconSize, iconEnd } = props;

  return (
    <S.ButtonMixedHorizontal {...props}>
      <S.IconStart {...props}>
        <FontAwesomeIcon icon={icon} size={iconSize} />
      </S.IconStart>

      <S.Label {...props}>{props.children}</S.Label>

      {iconEnd && <S.IconEnd icon={iconEnd} size={iconSize} />}
    </S.ButtonMixedHorizontal>
  );
};

export default ButtonMixedHorizontal;
