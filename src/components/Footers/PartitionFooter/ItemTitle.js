import styled from "styled-components";

const Title = styled.a`
  opacity: 0.5;
  margin: 30px 0px;
  cursor: pointer;
`;

function ItemTitle({ title }) {
  return <Title>{title}</Title>;
}

export default ItemTitle;
