import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.a`
  font-size: 12px;
  margin: 5px 0px;
  cursor: pointer;

  a {
    color: ${(props) => props.contentColor};
    font-weight: 700;
    transition: color 0.3s linear;
    :hover {
      color: ${(props) => props.contentHoverColor};
    }
  }
`;

function ItemContent({ content, contentColor, contentHoverColor }) {
  return (
    <Content contentColor={contentColor} contentHoverColor={contentHoverColor}>
      <Link to={"/"}> {content}</Link>
    </Content>
  );
}

export default ItemContent;
