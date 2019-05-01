import React from "react";
import styled from "styled-components";

const S = {};

S.Photo = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Photo = props => {
  const { src, alt } = props;

  return (
    <S.Photo {...props}>
      <img src={src} alt={alt} />
    </S.Photo>
  );
};

export default Photo;
