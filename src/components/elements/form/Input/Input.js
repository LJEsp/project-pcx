import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: var(--size-button);
  border: var(--size-xxs) solid ${p => p.theme.color.grey.medium};
  padding: 0 var(--size-s);

  /* padding: 0 ${p => p.theme.size.s}; */
`;

const Input = props => {
  return <StyledInput {...props} />;
};

export default Input;
