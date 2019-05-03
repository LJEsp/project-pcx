import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const S = {};

S.ButtonMixVertical = styled(Button)`
  height: unset;
  padding: var(--size-m) var(--size-s);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

S.Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: var(--size-s);
`;

S.Label = styled.span`
  text-align: center;
  font-size: ${p => p.theme.font.scale.small};
`;

const ButtonMixVertical = props => {
  const { icon, children } = props;

  return (
    <S.ButtonMixVertical {...props}>
      <S.Icon>
        <FontAwesomeIcon icon={icon} />
      </S.Icon>

      <S.Label>{children}</S.Label>
    </S.ButtonMixVertical>
  );
};

export default ButtonMixVertical;
