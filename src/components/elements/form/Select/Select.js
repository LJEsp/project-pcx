import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const StyledSelect = styled.div`
  height: var(--size-button);
  border: var(--size-xxs) solid ${p => p.theme.color.grey.medium};
  position: relative;

  & > select {
    padding: 0 var(--size-s);
    width: 100%;
    height: 100%;
    font-size: ${p => p.theme.font.scale.small};
  }

  & > .select-caret {
    position: absolute;
    top: 50%;
    right: var(--size-base);
    transform: translateY(-50%);
    color: ${p => p.theme.color.grey.dark};
    pointer-events: none;
  }
`;

const Select = props => {
  const { options = [], placeholder, name, id } = props;

  return (
    <StyledSelect {...props}>
      <select name={name} id={id}>
        {placeholder && <option value="">{placeholder}</option>}

        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <div className="select-caret">
        <FontAwesomeIcon icon={faCaretDown} size="lg" />
      </div>
    </StyledSelect>
  );
};

export default Select;
