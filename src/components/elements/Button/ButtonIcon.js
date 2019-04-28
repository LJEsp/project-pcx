import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledButtonIcon = styled(Button)`
  min-width: var(--size-button);
  width: var(--size-button);
`;

const ButtonIcon = props => {
  return <StyledButtonIcon {...props}>{props.children}</StyledButtonIcon>;
};

export default ButtonIcon;
