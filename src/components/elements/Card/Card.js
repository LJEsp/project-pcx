import styled from "styled-components";

const Card = styled.div`
  background-color: ${p => p.theme.color.white};
  color: ${p => p.theme.color.dark};
  box-shadow: ${p => p.theme.shadow[1]};
`;

export default Card;
