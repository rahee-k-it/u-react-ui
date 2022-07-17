
import styled from "styled-components";

const OutlineContainer = styled.button`
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 7px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-family: 700;
  cursor: pointer;
`;

function OutlineBtn({ title, color, width, height, fontSize }) {
  return (
    <>
      <OutlineContainer color={color} width={width} height={height} fontSize={fontSize}>
        <span>{title}</span>
      </OutlineContainer>
    </>
  );
}

export default OutlineBtn;
