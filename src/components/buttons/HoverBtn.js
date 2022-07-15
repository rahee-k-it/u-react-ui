import styled from 'styled-components';

const HoverContainer = styled.button`
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 7px;
  background-color: white;
  display: flex;
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

function HoverBtn({ color, title }) {
  return (
    <>
      <HoverContainer color={color}>
        <span>{title}</span>
      </HoverContainer>
    </>
  );
}
export default HoverBtn;
