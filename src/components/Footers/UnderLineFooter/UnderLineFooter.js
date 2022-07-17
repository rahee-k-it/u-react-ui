import styled from "styled-components";
import { Wrapper } from "../PartitionFooter/PartitionFooter";
import ItemContent from "./ItemContent";
import ItemTitle from "./ItemTitle";

const WrapperUnderLine = styled(Wrapper)`
  background-color: ${(props) => props.bgColor};
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;

  &:nth-child(2) {
    margin: 10px 0px;
    display: flex;
    height: 100%;
    align-items: center;
    padding-top: 10px;
    opacity: 0.5;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    span {
      margin: 0px 20px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function UnderLineFoooter({ bgColor, titleColor, contentColor }) {
  return (
    <>
      <WrapperUnderLine bgColor={bgColor}>
        <Box>
          <Container>
            <ItemTitle title="Title" titleColor={titleColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
          </Container>

          <Container>
            <ItemTitle title="Title" titleColor={titleColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
          </Container>

          <Container>
            <ItemTitle title="Title" titleColor={titleColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
          </Container>

          <Container>
            <ItemTitle title="Title" titleColor={titleColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
            <ItemContent content="Content" contentColor={contentColor} />
          </Container>
        </Box>

        <Box>
          <div>
            <span>&copy;{new Date().getFullYear()}</span>
            <span>Ulsan Study</span>
          </div>
        </Box>
      </WrapperUnderLine>
    </>
  );
}

export default UnderLineFoooter;
