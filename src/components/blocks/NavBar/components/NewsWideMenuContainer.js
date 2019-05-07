import React from "react";
import styled from "styled-components";

import { Button } from "components/elements";
import { NewsCard } from "components/compounds";
import { WideMenuContainer } from "components/compounds/WideMenu";

const S = {};

S.NewsWideMenuContainer = styled(WideMenuContainer)`
  padding: var(--size-base);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .newsWideMenuContainer-newsCards {
    display: flex;
    margin-bottom: var(--size-base);

    & > *:not(:last-child) {
      margin-right: var(--size-base);
    }

    & > * {
      flex: 1;
    }
  }
`;

const NewsWideMenuContainer = props => {
  return (
    <S.NewsWideMenuContainer {...props}>
      <div className="newsWideMenuContainer-newsCards">
        <NewsCard
          caption="Promotion"
          label="INNO3D GTX 1660 Ti + Intel Core i5-9400F Bundle Promo"
          photoSrc="https://i2.wp.com/pcx.com.ph/wp-content/uploads/2019/04/3-Promo-Page-Header-1357-x-768-3-2.jpg?resize=1024%2C580&ssl=1"
        />
        <NewsCard
          caption="Promotion"
          label="Lenovo Double the Fun Tablet Bundle"
          photoSrc="https://i2.wp.com/pcx.com.ph/wp-content/uploads/2019/04/3-Promo-Page-Header-1357-x-768-4-1.jpg?resize=1024%2C580&ssl=1"
        />
        <NewsCard
          caption="Promotion"
          label="PCX LAPTOP AND PRINTER BUNDLE PROMO"
          photoSrc="https://i2.wp.com/pcx.com.ph/wp-content/uploads/2019/02/3-Promo-Page-Header-1357-x-768-1.jpg?resize=1024%2C580&ssl=1"
        />
        <NewsCard />
      </div>

      <Button variant="secondary" size="big" outline>See All News and Promos</Button>
    </S.NewsWideMenuContainer>
  );
};

export default NewsWideMenuContainer;
