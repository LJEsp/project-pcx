import styled, { css } from "styled-components";

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

const configs = css`
  ${p =>
    p.bold &&
    css`
      font-weight: 600;
    `}

  ${p =>
    p.uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

const Typography = styled.span`
  ${variants};

  ${configs};
`;

export default Typography;
