import React from "react";
import styled, { css } from "styled-components";
import "destyle.css";

const variant = css`
  ${p =>
    p.variant &&
    css`
      padding: var(--size-s) var(--size-m);
    `};

  ${p =>
    p.variant === "primary" &&
    css`
      background-color: ${p => p.theme.color.primary.main};
      color: ${p => p.theme.color.light};

      &:hover {
        background-color: ${p => p.theme.color.primary.dark};
      }
    `};

  ${p =>
    p.variant === "secondary" &&
    css`
      background-color: ${p => p.theme.color.secondary.main};
      color: ${p => p.theme.color.light};

      &:hover {
        background-color: ${p => p.theme.color.secondary.dark};
      }
    `};
`;

const size = css`
  ${p =>
    p.size === "big" &&
    css`
      height: var(--size-button-big);
    `};
`;

const StyledButton = styled.button`
  height: var(--size-button);

  &:hover {
    background-color: ${p => p.theme.color.grey.light};
  }

  &:focus {
    box-shadow: var(--focus);
    z-index: 1;
  }

  ${variant};
  ${size};
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
