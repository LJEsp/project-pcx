import React from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const S = {};

S.WideMenuContainer = animated(styled.div`
  pointer-events: ${p => (p.isHovered ? "auto" : "none")};
`);

const WideMenuContainer = props => {
  const { isHovered, bind, children } = props;

  const transitions = useTransition(isHovered, null, {
    from: { opacity: 0, transform: "translateY(-1rem)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-1rem)" }
  });

  return transitions.map(
    ({ item, key, props: style }) =>
      item && (
        <S.WideMenuContainer {...bind} key={key} style={style} {...props}>
          {children}
        </S.WideMenuContainer>
      )
  );
};

export default WideMenuContainer;
