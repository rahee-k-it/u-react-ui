import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const LinkContainer = styled.button`
  cursor: pointer;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;

  i {
    font-size: 13px;
    margin-left: 2px;
  }

  :hover {
    color: ${(props) => props.color};
    text-decoration: underline;
  }
`;

function LinkBtn({ title, color, width, height, fontSize }) {
  return (
    <>
      <LinkContainer color={color} width={width} height={height} fontSize={fontSize}>
        <span>{title}</span>
        <i>
          <FontAwesomeIcon icon={faAngleRight} />
        </i>
      </LinkContainer>
    </>
  );
}

export default LinkBtn;
