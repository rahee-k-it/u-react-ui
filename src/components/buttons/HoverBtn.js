import styled from "styled-components";

const HoverContainer = styled.button`
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 7px;
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-family: 700;
  cursor: pointer;
  transition: background-color 0.8s linear;
  &:hover {
    background-color: ${(props) => props.color};
    color: white;
    opacity: 0.7;
  }
`;

function HoverBtn({ color, title, width, height, fontSize }) {
  return (
    <>
      <HoverContainer color={color} width={width} height={height} fontSize={fontSize}>
        <span>{title}</span>
      </HoverContainer>
    </>
  );
}
export default HoverBtn;
