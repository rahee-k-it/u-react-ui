import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.a`
  font-size: 12px;
  margin: 5px 0px;
  cursor: pointer;
  a {
    color: black;
    font-weight: 700;
    transition: color 0.3s linear;
    :hover {
      color: white;
    }
  }
`;

function ItemContent({ content }) {
  return (
    <Content>
      <Link to={"/"}> {content}</Link>
    </Content>
  );
}

export default ItemContent;
