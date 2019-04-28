import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const S = {};

S.ButtonCombination = styled.div`
  padding: var(--size-m) var(--size-s);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.color.grey.light};
  }

  & > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: var(--size-s);
  }

  & > .label {
    text-align: center;
    font-size: ${p => p.theme.font.scale.small};
  }
`;

const ButtonCombination = props => {
  const { icon, label } = props;

  return (
    <S.ButtonCombination>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>

      <div className="label">
        <span>{label}</span>
      </div>
    </S.ButtonCombination>
  );
};

export default ButtonCombination;
