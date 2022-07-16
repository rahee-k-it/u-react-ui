import styled from 'styled-components';

const DisabledContainer = styled.button`
  border: 1px solid ${(props) => props.color};
  padding: 10px;
  color: ${(props) => props.color};
  border-radius: 30px;
  font-family: 700;
  background-color: white;
  cursor: pointer;
  :disabled {
    opacity: 0.3;
  }
`;

function DisabledBtn({ title, color }) {
  return (
    <>
      <DisabledContainer disabled color={color}>
        <span>{title}</span>
      </DisabledContainer>
    </>
  );
}

export default DisabledBtn;
