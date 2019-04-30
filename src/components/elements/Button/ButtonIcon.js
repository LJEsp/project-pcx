import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./Button";

const StyledButtonIcon = styled(Button)`
  min-width: var(--size-button);
  width: var(--size-button);
`;

const ButtonIcon = props => {
  const { icon, iconSize } = props;

  return (
    <StyledButtonIcon {...props}>
      <FontAwesomeIcon icon={icon} size={iconSize} />
    </StyledButtonIcon>
  );
};

export default ButtonIcon;
