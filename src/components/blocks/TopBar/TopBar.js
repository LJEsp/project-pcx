import React from "react";
import styled from "styled-components";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUsers,
  faQuestion,
  faMapMarkerAlt,
  faList
} from "@fortawesome/free-solid-svg-icons";

import {
  Typography,
  ButtonIcon,
  ButtonMixedHorizontal
} from "components/elements";

import { InnerWidth } from "components/layouts";

const S = {};

S.TopBar = styled.nav`
  background-color: ${p => p.theme.color.secondary.main};
  color: ${p => p.theme.color.light};
`;

S.InnerWidth = styled(InnerWidth)`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;

  @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
  }

  @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
    grid-template-columns: 1fr;

    & > * {
      display: none;
    }
  }
`;

S.SocialWrapper = styled.div`
  border-right: var(--border-light);
  padding-right: var(--size-m);

  @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
    border-right: 0;
    padding-right: 0;
  }

  @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
    display: block;
  }
`;

S.LinksWrapper = styled.div`
  display: flex;

  @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
    grid-column: 1 / -1;
  }

  @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
    display: none;
  }
`;

const TopBar = props => {
  return (
    <S.TopBar {...props}>
      <S.InnerWidth>
        <Typography variant="base" configs={["uppercase", "bold"]}>
          For all your digital needs
        </Typography>

        <S.SocialWrapper>
          <ButtonIcon
            icon={faFacebook}
            iconSize="lg"
            variant="secondary"
          />
          <ButtonIcon
            icon={faTwitter}
            iconSize="lg"
            variant="secondary"
          />
          <ButtonIcon
            icon={faInstagram}
            iconSize="lg"
            variant="secondary"
          />
          <ButtonIcon
            icon={faYoutube}
            iconSize="lg"
            variant="secondary"
          />
          <ButtonIcon
            icon={faEnvelope}
            iconSize="lg"
            variant="secondary"
          />
        </S.SocialWrapper>

        <S.LinksWrapper>
          <ButtonMixedHorizontal
            icon={faUsers}
            variant="secondary"
          >
            We are hiring
          </ButtonMixedHorizontal>

          <ButtonMixedHorizontal
            icon={faQuestion}
            variant="secondary"
          >
            FAQs
          </ButtonMixedHorizontal>

          <ButtonMixedHorizontal
            icon={faMapMarkerAlt}
            variant="secondary"
          >
            Branches
          </ButtonMixedHorizontal>

          <ButtonMixedHorizontal
            icon={faList}
            variant="secondary"
          >
            Download Price Lists
          </ButtonMixedHorizontal>
        </S.LinksWrapper>
      </S.InnerWidth>
    </S.TopBar>
  );
};

export default TopBar;
