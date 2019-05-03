import React from "react";
import styled from "styled-components";

const S = {};

S.WideMenuContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${p => p.theme.color.grey.lightHover},
    rgba(0, 0, 0, 0)
  );
`;

const WideMenuContainer = props => {
  const { isHovered, bind, children } = props;

  return (
    isHovered && (
      <S.WideMenuContainer {...bind} {...props}>
        {children}
      </S.WideMenuContainer>
    )
  );
};

export default WideMenuContainer;
