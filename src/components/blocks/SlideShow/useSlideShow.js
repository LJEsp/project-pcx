import { useState, useEffect } from "react";

const useSideShow = slideShowData => {
  const [currentSlideIndex, setSlideIndex] = useState(0);
  const [currentSlideShow, setSlideShow] = useState([slideShowData[0]]);
  const [isForward, setIsForward] = useState(true);
  const [isSlideShowRotating, setIsSlideShowRotating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSlideShowRotating) {
        handleNextSlide({ isTimerActive: true });
      }
    }, 8000);

    return () => clearTimeout(timer);
  });

  function handleNavigate(index) {
    setSlideIndex(index);
    setIsForward(currentSlideIndex < index ? true : false);

    setSlideShow(
      slideShowData.filter(
        (slideItem, slideItemIndex) => slideItemIndex === index
      )
    );

    setIsSlideShowRotating(false);
  }

  function handleNextSlide({ isTimerActive }) {
    if (currentSlideIndex === slideShowData.length - 1) {
      setSlideIndex(0);
      setSlideShow([slideShowData[0]]);
    } else {
      setSlideIndex(currentSlideIndex + 1);
      setSlideShow([slideShowData[currentSlideIndex + 1]]);
    }
    setIsForward(true);

    if (!isTimerActive) {
      setIsSlideShowRotating(false);
    }
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

    setIsSlideShowRotating(false);
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
