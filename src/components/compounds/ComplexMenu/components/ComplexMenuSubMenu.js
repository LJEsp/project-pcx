import React from "react";
import styled from "styled-components";

import { Button } from "components/elements";

const S = {};

S.ComplexMenuSubMenu = styled.div`
  background-color: ${p => p.theme.color.grey.light};
  border-left: 2px solid ${p => p.theme.color.grey.lightHover};
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
`;

const ComplexMenuSubMenu = props => {
  const { menu } = props;

  return (
    <S.ComplexMenuSubMenu {...props}>
      {menu.map(item => (
        <Button variant="light" size="big" full nowrap left>
          {item.label}
        </Button>
      ))}
    </S.ComplexMenuSubMenu>
  );
};

export default ComplexMenuSubMenu;
