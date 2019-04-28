import React from "react";
import styled from "styled-components";

import pcexpressLogo from "static/images/pcexpress-logo.png";

const StyledLogo = styled.img`
  width: 100%;
  height: auto;
  max-width: ${p => p.theme.increment(14)};
  display: block;
`;

const Logo = props => {
  return <StyledLogo src={pcexpressLogo} alt="Logo" {...props} />;
};

export default Logo;
