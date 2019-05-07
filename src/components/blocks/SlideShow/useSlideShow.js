import { useState } from "react";

const useSideShow = slideShowData => {
  const [currentSlideIndex, setSlideIndex] = useState(0);
  const [currentSlideShow, setSlideShow] = useState([slideShowData[0]]);
  const [isForward, setIsForward] = useState(true);

  function handleNavigate(index) {
    setSlideIndex(index);
    setIsForward(currentSlideIndex < index ? true : false);

    setSlideShow(
      slideShowData.filter(
        (slideItem, slideItemIndex) => slideItemIndex === index
      )
    );
  }

  function handleNextSlide() {
    if (currentSlideIndex === slideShowData.length - 1) {
      setSlideIndex(0);
      setSlideShow([slideShowData[0]]);
    } else {
      setSlideIndex(currentSlideIndex + 1);
      setSlideShow([slideShowData[currentSlideIndex + 1]]);
    }
    setIsForward(true);
  }

  function handlePreviousSlide() {
    if (currentSlideIndex === 0) {
      setSlideIndex(slideShowData.length - 1);
      setSlideShow([slideShowData[slideShowData.length - 1]]);
    } else {
      setSlideIndex(currentSlideIndex - 1);
      setSlideShow([slideShowData[currentSlideIndex - 1]]);
    }
    setIsForward(false);
  }

  return {
    currentSlideIndex,
    currentSlideShow,
    isForward,
    handleNavigate,
    handleNextSlide,
    handlePreviousSlide
  };
};

export default useSideShow;
