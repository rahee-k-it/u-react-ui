import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.a`
  opacity: 0.5;
  font-size: 12px;
  margin: 5px 0px;
  cursor: pointer;
`;

function ItemContent({ content }) {
  return (
    <Content>
      <Link to={"/"}> {content}</Link>
    </Content>
  );
}

export default ItemContent;