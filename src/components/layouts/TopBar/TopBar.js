import React from "react";
import styled from "styled-components";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Typography, ButtonIcon } from "components/elements";

const S = {};

S.TopBar = styled.nav`
  background-color: ${p => p.theme.color.secondary.main};
  color: ${p => p.theme.color.light};
`;

const TopBar = props => {
  return (
    <S.TopBar>
      <Typography variant="base" configs={["uppercase", "bold"]}>
        For all your digital needs
      </Typography>

      <ButtonIcon icon={faFacebook} iconSize="lg" configs={["dark"]} />
      <ButtonIcon icon={faTwitter} iconSize="lg" configs={["dark"]} />
      <ButtonIcon icon={faEnvelope} iconSize="lg" configs={["dark"]} />
      <ButtonIcon icon={faInstagram} iconSize="lg" configs={["dark"]} />
      <ButtonIcon icon={faYoutube} iconSize="lg" configs={["dark"]} />
    </S.TopBar>
  );
};

export default TopBar;
