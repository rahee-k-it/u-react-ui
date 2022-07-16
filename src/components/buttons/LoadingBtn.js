import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from 'styled-components';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const LoadingIcon = styled.i`
  margin-right: 5px;
  animation: ${rotation} 1s linear infinite;
`;

export const Container = styled.button`
  padding: 7px;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 700;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function LoadingBtn({ title, bgColor, width, height, fontSize }) {
  return (
    <>
      <Container bgColor={bgColor} width={width} height={height} fontSize={fontSize}>
        <LoadingIcon>
          <FontAwesomeIcon icon={faSpinner} />
        </LoadingIcon>
        <span>{title}</span>
      </Container>
    </>
  );
}
export default LoadingBtn;
