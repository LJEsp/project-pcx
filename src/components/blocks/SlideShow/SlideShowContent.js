import React from "react";
import styled, { css } from "styled-components";
import { useTransition, animated } from "react-spring";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import { Typography, Button, ButtonIcon } from "components/elements";
import { InnerWidth } from "components/layouts";

import slideShowData from "./slideShowData";

const S = {};

S.SlideShowContent = styled.div`
  position: relative;
  padding-bottom: ${p => p.theme.increment(10)};

  .slideShowContent-navButtons {
    position: absolute;
    bottom: var(--size-xl);
    left: 50%;
    transform: translateX(-50%);

    display: flex;

    *:not(:last-child) {
      margin-right: var(--size-m);
    }
  }
`;

S.InnerWidth = styled(InnerWidth)`
  height: 100%;
  display: flex;
  align-items: center;

  .slideShowContent-left {
    width: 38%;
  }

  .slideShowContent-header {
    margin-bottom: var(--size-m);
  }

  .slideShowContent-description {
    margin-bottom: var(--size-l);
  }

  .slideShowContent-previous {
    margin-right: var(--size-base);
    align-self: center;
  }

  .slideShowContent-next {
    margin-left: auto;
    align-self: center;
  }
`;

S.NavButton = styled.button`
  width: var(--size-button);
  height: var(--size-button);
  /* border-radius: 1000rem; */

  background-color: ${p => p.theme.color.white};

  &:hover {
    background-color: ${p => p.theme.color.grey.lightHover};
  }

  ${p =>
    p.isSelected &&
    css`
      background-color: ${p => p.theme.color.secondary.light};
      cursor: default;

      &:hover {
        background-color: ${p => p.theme.color.secondary.light};
      }
    `}
`;

const SlideShowContent = props => {
  const {
    currentSlideIndex,
    currentSlideShow,
    isForward,
    handleNavigate,
    handleNextSlide,
    handlePreviousSlide
  } = props;

  const transitions = useTransition(currentSlideShow, item => item.heading, {
    from: {
      position: "absolute",
      top: 0,
      transform: isForward ? "translateX(100%)" : "translateX(-100%)",
      opacity: 0
    },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: {
      transform: !isForward ? "translateX(100%)" : "translate(-100%)",
      opacity: 0
    }
  });

  return (
    <S.SlideShowContent {...props}>
      <S.InnerWidth>
        <ButtonIcon
          className="slideShowContent-previous"
          icon={faChevronLeft}
          iconSize="lg"
          dark
          onClick={handlePreviousSlide}
        />

        <div>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  className="slideShowContent-left"
                  key={key}
                  style={props}
                >
                  <Typography
                    className="slideShowContent-header"
                    variant="display-1"
                    as="h1"
                    bold
                  >
                    {item.heading}
                  </Typography>

                  <Typography
                    variant="body"
                    className="slideShowContent-description"
                    as="p"
                  >
                    {item.description}
                  </Typography>

                  <Button variant="primary" size="big" outline>
                    {item.cta}
                  </Button>
                </animated.div>
              )
          )}
        </div>

        <ButtonIcon
          className="slideShowContent-next"
          icon={faChevronRight}
          iconSize="lg"
          dark
          onClick={handleNextSlide}
        />
      </S.InnerWidth>

      <div className="slideShowContent-navButtons">
        {slideShowData.map((slideShowItem, index) => (
          <S.NavButton
            isSelected={index === currentSlideIndex}
            onClick={() => handleNavigate(index)}
          />
        ))}
      </div>
    </S.SlideShowContent>
  );
};

export default SlideShowContent;
