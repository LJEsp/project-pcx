import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Input, Select } from "components/elements/form";
import { ButtonIcon } from "components/elements";

const S = {};

S.Input = styled(Input)`
  flex-grow: 2;

  @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
    width: 100%;
  }
`;

S.Select = styled(Select)`
  border-left: 0;
  flex-grow: 1;

  @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
    border-left: var(--size-xxs) solid ${p => p.theme.color.grey.medium};
    border-top: 0;
  }
`;

S.ButtonIcon = styled(ButtonIcon)`
  border: var(--size-xxs) solid ${p => p.theme.color.grey.medium};
  border-left: 0;
  color: ${p => p.theme.color.grey.dark};

  @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
    border-top: 0;
  }
`;

S.SearchBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
    flex-flow: row wrap;
  }
`;

const SearchBox = props => {
  const { categoryOptions } = props;

  return (
    <S.SearchBox {...props}>
      <S.Input placeholder="Search for products" />

      <S.Select options={categoryOptions} placeholder="Select Category" />

      <S.ButtonIcon>
        <FontAwesomeIcon icon={faSearch} />
      </S.ButtonIcon>
    </S.SearchBox>
  );
};

export default SearchBox;
