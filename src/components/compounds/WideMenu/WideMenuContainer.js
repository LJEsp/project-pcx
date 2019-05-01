import React from "react";
import styled from "styled-components";

const S = {};

S.WideMenuContainer = styled.div`
  background-color: ${p => p.theme.color.grey.lightHover};
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
