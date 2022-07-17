
import styled from "styled-components";


const DisabledContainer = styled.button`
  border: 1px solid ${(props) => props.color};
  padding: 10px;
  color: ${(props) => props.color};
  border-radius: 30px;
  font-family: 700;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  :disabled {
    opacity: 0.3;
  }
`;


function DisabledBtn({ title, color, width, height, fontSize }) {
  return (
    <>
      <DisabledContainer disabled color={color} width={width} height={height} fontSize={fontSize}>
        <span>{title}</span>
      </DisabledContainer>
    </>
  );
}

export default DisabledBtn;
