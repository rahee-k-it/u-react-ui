import styled from 'styled-components';

const OutlineContainer = styled.button`
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 7px;
  background-color: white;
  display: flex;
  border-radius: 5px;
  font-family: 700;
  cursor: pointer;
`;

function OutlineBtn({ title, color }) {
  return (
    <>
      <OutlineContainer color={color}>
        <span>{title}</span>
      </OutlineContainer>
    </>
  );
}

export default OutlineBtn;
