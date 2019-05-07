import React from "react";
import styled from "styled-components";

import { Card, Typography, Photo } from "components/elements";

const S = {};

S.NewsCard = styled(Card)`
  display: flex;
  flex-flow: column;
  position: relative;
  height: 100%;
`;

S.Date = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  padding: var(--size-s) var(--size-m);
  background-color: ${p => p.theme.color.light};
  position: absolute;
  top: var(--size-s);
  left: var(--size-s);
  color: ${p => p.theme.color.secondary.main};
  box-shadow: ${p => p.theme.shadow[1]};
`;

S.Photo = styled(Photo)`
  flex: 3;
`;

S.ContentWrapper = styled.div`
  padding: var(--size-base);
  padding-top: var(--size-l);
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  position: relative;
`;

S.Caption = styled(Typography)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: var(--size-s) var(--size-m);
  color: ${p => p.theme.color.light};
  background-color: ${p => p.theme.color.secondary.main};
  white-space: nowrap;
`;

const NewsCard = props => {
  const { caption, label, photoSrc } = props;

  return (
    <S.NewsCard {...props}>
      <S.Date>
        <Typography variant="display-2" bold>
          19
        </Typography>
        <Typography variant="base" uppercase bold>
          Mar
        </Typography>
      </S.Date>

      <S.Photo src={photoSrc} alt="" />

      <S.ContentWrapper>
        <S.Caption variant="display-4" uppercase bold>
          {caption}
        </S.Caption>

        <Typography variant="body">{label}</Typography>
      </S.ContentWrapper>
    </S.NewsCard>
  );
};

NewsCard.defaultProps = {
  caption: "NewsCard Caption",
  label: "NewsCard Label",
  photoSrc: "https://placeimg.com/640/480/any"
};

export default NewsCard;
