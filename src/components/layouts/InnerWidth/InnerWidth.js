import styled from "styled-components";

const InnerWidth = styled.div`
  width: 78%;
  margin: 0 auto;

  @media (max-width: ${p => p.theme.breakpoint.desktopL}) {
    width: unset;
    margin: 0 var(--size-base);
  }
`;

export default InnerWidth;
