
import styled from "styled-components";


const FillContainer = styled.button`
  border: none;
  padding: 8px 30px;
  background-color: ${(props) => props.bgColor};
  color: white;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-family: 700;
  cursor: pointer;
`;

function FillBtn({ title, bgColor, width, height, fontSize }) {
  return (
    <>
      <FillContainer bgColor={bgColor} width={width} height={height} fontSize={fontSize}>
        <span>{title}</span>
      </FillContainer>
    </>
  );
}

export default FillBtn;
