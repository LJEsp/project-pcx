import React from "react";
import styled from "styled-components";

const S = {};

S.WideMenuContainer = styled.div`
  background-color: ${p => p.theme.color.grey.light};
`;

const WideMenuContainer = props => {
  const { isHovered, bind } = props;

  return (
    <S.WideMenuContainer {...bind} {...props}>
      {isHovered && "test"}
    </S.WideMenuContainer>
  );
};

export default WideMenuContainer;
