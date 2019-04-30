import React from "react";
import styled, { css } from "styled-components";
import "destyle.css";

const variant = css`
  ${p =>
    p.variant === "primary" &&
    css`
      --this-color: ${p => p.theme.color.primary.main};
      background-color: var(--this-color);
      color: ${p => p.theme.color.light};

      &:hover {
        background-color: ${p => p.theme.color.primary.dark};
      }
    `};

  ${p =>
    p.variant === "secondary" &&
    css`
      --this-color: ${p => p.theme.color.secondary.main};
      background-color: var(--this-color);
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
      padding: var(--size-s) var(--size-l);
      font-weight: 600;
    `};
`;

const configs = css`
  ${p =>
    p.outline &&
    css`
      border: var(--size-xxs) solid var(--this-color);
      background-color: unset;
      color: var(--this-color);
      font-weight: 600;

      &:hover {
        background-color: ${p => p.theme.color.grey.light};
      }
    `}
`;

const StyledButton = styled.button`
  --this-color: ${p => p.theme.color.dark};

  padding: var(--size-s) var(--size-m);
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
  ${configs};
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
