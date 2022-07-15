import styled from 'styled-components';

const FillContainer = styled.button`
  border: none;
  padding: 8px 30px;
  background-color: ${(props) => props.bgColor};
  color: white;
  border-radius: 30px;
  font-family: 700;
  cursor: pointer;
`;

function FillBtn({ title, bgColor }) {
  return (
    <>
      <FillContainer bgColor={bgColor}>
        <span>{title}</span>
      </FillContainer>
    </>
  );
}

export default FillBtn;
