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
  flex: 2;
`;

S.ContentWrapper = styled.div`
  padding: var(--size-base);
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
`;

S.Caption = styled(Typography)`
  margin-bottom: var(--size-s);
  color: ${p => p.theme.color.secondary.main};
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

        <Typography variant="display-3">{label}</Typography>
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
