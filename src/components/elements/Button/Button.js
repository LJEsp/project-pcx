import React from "react";
import styled from "styled-components";
import "destyle.css";

const StyledButton = styled.button`
  height: var(--size-button);

  &:hover {
    background-color: ${p => p.theme.color.grey.light};
  }
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
