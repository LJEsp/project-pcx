import styled, { css } from "styled-components";
import cropLineHeight from "styling/utils/cropLineHeight";

const configs = css`
  ${p =>
    p.configs.includes("bold") &&
    css`
      font-weight: 600;
    `}

  ${p =>
    p.configs.includes("uppercase") &&
    css`
      text-transform: uppercase;
    `}
`;

const variants = css`
  ${p =>
    (p.variant === "body" &&
      css`
        font-size: ${p => p.theme.font.scale.body};
        line-height: ${p => p.theme.font.lineHeight};
      `) ||
    (p.variant === "base" &&
      css`
        font-size: ${p => p.theme.font.scale.base};
        line-height: ${p => p.theme.font.lineHeight};
      `) ||
    (p.variant === "display-1" &&
      css`
        font-size: ${p => p.theme.font.scale.display1};
      `) ||
    (p.variant === "display-2" &&
      css`
        font-size: ${p => p.theme.font.scale.display2};
      `) ||
    (p.variant === "display-3" &&
      css`
        font-size: ${p => p.theme.font.scale.display3};
      `) ||
    (p.variant === "display-4" &&
      css`
        font-size: ${p => p.theme.font.scale.display4};
      `)}
`;

const Typography = styled.span`
  ${variants};

  ${p => p.configs && configs};
`;

export default Typography;
