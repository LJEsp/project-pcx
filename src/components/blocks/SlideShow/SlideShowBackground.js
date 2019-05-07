import React from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import { Photo } from "components/elements";

const S = {};

S.SlideShowBackground = styled.div`
  &::after {
    display: block;
    position: absolute;
    top: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      transparent 38%
    );
    height: 100%;
    width: 100%;
    pointer-events: none;
    content: "";
  }

  &::before {
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    background-image: linear-gradient(
      96deg,
      rgba(0, 0, 0, 0.6) 38%,
      transparent
    );
    height: 100%;
    width: 100%;
    pointer-events: none;
    content: "";
  }

  .slideShowBackground-photoContainer {
    width: 100%;
    height: 100%;
  }
`;

const SlideShowBackground = props => {
  const { currentSlideShow, isForward } = props;

  const transitions = useTransition(currentSlideShow, item => item.heading, {
    from: {
      position: "absolute",
      transform: isForward ? "translateX(100%)" : "translateX(-100%)"
    },
    enter: { transform: "translateX(0)" },
    leave: {
      transform: !isForward ? "translateX(100%)" : "translateX(-100%)"
    }
  });

  return (
    <S.SlideShowBackground {...props}>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className="slideShowBackground-photoContainer"
              key={key}
              style={props}
            >
              <Photo src={item.photoSrc} />
            </animated.div>
          )
      )}

      {/* {transitions.map(
        (item, key, props) =>
          item && <Photo src={item.photoSrc} key={key} style={props} />
      )} */}
    </S.SlideShowBackground>
  );
};

export default SlideShowBackground;
