import React from "react";
import styled, { css } from "styled-components";
import "destyle.css";

const configs = css`
  ${p =>
    p.configs.includes("dark") &&
    css`
      &:hover {
        background-color: ${p => p.theme.color.grey.dark};
      }
    `}

  ${p =>
    p.configs.includes("dark") &&
    p.configs.includes("secondary") &&
    css`
      &:hover {
        background-color: ${p => p.theme.color.secondary.dark};
      }
    `}
`;

const StyledButton = styled.button`
  height: var(--size-button);

  &:hover {
    background-color: ${p => p.theme.color.grey.light};
  }

  ${p => p.configs && configs};
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
