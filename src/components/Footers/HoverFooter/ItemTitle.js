import styled from "styled-components";

const Title = styled.a`
  font-weight: 700;
  font-size: 13px;
  margin: 30px 0px;
  color: ${(props) => props.titleColor};
`;

function ItemTitle({ title, titleColor }) {
  return <Title titleColor={titleColor}>{title}</Title>;
}

export default ItemTitle;
