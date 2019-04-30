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
  ButtonCombinationHorizontal
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
    <S.TopBar>
      <S.InnerWidth>
        <Typography variant="base" configs={["uppercase", "bold"]}>
          For all your digital needs
        </Typography>

        <S.SocialWrapper>
          <ButtonIcon
            icon={faFacebook}
            iconSize="lg"
            configs={["dark", "secondary"]}
          />
          <ButtonIcon
            icon={faTwitter}
            iconSize="lg"
            configs={["dark", "secondary"]}
          />
          <ButtonIcon
            icon={faInstagram}
            iconSize="lg"
            configs={["dark", "secondary"]}
          />
          <ButtonIcon
            icon={faYoutube}
            iconSize="lg"
            configs={["dark", "secondary"]}
          />
          <ButtonIcon
            icon={faEnvelope}
            iconSize="lg"
            configs={["dark", "secondary"]}
          />
        </S.SocialWrapper>

        <S.LinksWrapper>
          <ButtonCombinationHorizontal
            icon={faUsers}
            configs={["dark", "secondary"]}
          >
            We are hiring
          </ButtonCombinationHorizontal>

          <ButtonCombinationHorizontal
            icon={faQuestion}
            configs={["dark", "secondary"]}
          >
            FAQs
          </ButtonCombinationHorizontal>

          <ButtonCombinationHorizontal
            icon={faMapMarkerAlt}
            configs={["dark", "secondary"]}
          >
            Branches
          </ButtonCombinationHorizontal>

          <ButtonCombinationHorizontal
            icon={faList}
            configs={["dark", "secondary"]}
          >
            Download Price Lists
          </ButtonCombinationHorizontal>
        </S.LinksWrapper>
      </S.InnerWidth>
    </S.TopBar>
  );
};

export default TopBar;
