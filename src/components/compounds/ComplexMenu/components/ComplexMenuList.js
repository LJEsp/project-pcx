import React from "react";
import styled from "styled-components";

import ComplexMenuItem from "./ComplexMenuItem";

const S = {};

S.ComplexMenuList = styled.div`
  width: 100%;
`;

const ComplexMenuList = props => {
  const { menu } = props;

  return (
    <S.ComplexMenuList {...props}>
      {menu.map(item => (
        <ComplexMenuItem item={item} key={item.label} />
      ))}
    </S.ComplexMenuList>
  );
};

export default ComplexMenuList;
