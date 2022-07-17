import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.a`
  opacity: 0.55;
  font-size: 12px;
  margin: 5px 0px;
  cursor: pointer;

  a {
    color: ${(props) => props.contentColor};
  }
  &:hover {
    text-decoration: underline;
  }
`;

function ItemContent({ content, contentColor }) {
  return (
    <Content contentColor={contentColor}>
      <Link to={"/"}> {content}</Link>
    </Content>
  );
}

export default ItemContent;
