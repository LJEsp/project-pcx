import React from "react";
import styled, { css } from "styled-components";
import "destyle.css";

const variant = css`
  ${p =>
    p.variant === "primary" &&
    css`
      --this-color: ${p => p.theme.color.primary.main};
      --this-color-hover: ${p => p.theme.color.primary.dark};

      background-color: var(--this-color);
      color: ${p => p.theme.color.light};
    `};

  ${p =>
    p.variant === "secondary" &&
    css`
      --this-color: ${p => p.theme.color.secondary.main};
      --this-color-hover: ${p => p.theme.color.secondary.dark};

      background-color: var(--this-color);
      color: ${p => p.theme.color.light};
    `};

  ${p =>
    p.variant === "light" &&
    css`
      --this-color: ${p => p.theme.color.grey.light};
      --this-color-hover: ${p => p.theme.color.grey.lightHover};

      background-color: var(--this-color);
      color: ${p => p.theme.color.dark};
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
        background-color: var(--this-color-hover);
      }
    `}

  ${p =>
    p.full &&
    css`
      width: 100%;
    `}

  ${p =>
    p.left &&
    css`
      text-align: left;
    `}

  ${p =>
    p.nowrap &&
    css`
      white-space: nowrap;
    `}
`;

const StyledButton = styled.button`
  --this-color: ${p => p.theme.color.dark};
  --this-color-hover: ${p => p.theme.color.grey.light};

  padding: var(--size-s) var(--size-m);
  height: var(--size-button);

  &:hover {
    background-color: var(--this-color-hover);
  }

  &:focus {
    outline: var(--focus);
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
