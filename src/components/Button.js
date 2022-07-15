import styled from 'styled-components';

const ButtonRed = styled.button`
  background-color: tomato;
`;

function Button({ title }) {
  return (
    <>
      <ButtonRed>{title}</ButtonRed>
    </>
  );
}

export default Button;
