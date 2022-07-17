import styled from "styled-components";

const Title = styled.a`
  font-weight: 700;
  font-size: 13px;
  margin: 30px 0px;
  color: white;
`;

function ItemTitle({ title }) {
  return <Title>{title}</Title>;
}

export default ItemTitle;
