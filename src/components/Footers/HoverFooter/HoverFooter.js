import styled from "styled-components";
import { Wrapper } from "../PartitionFooter/PartitionFooter";
import ItemContent from "./ItemContent";
import ItemTitle from "./ItemTitle";

const WrapperUnderLine = styled(Wrapper)`
  background-color: #1f1f1f;
  height: 300px;
  display: flex;
  flex-direction: column;
  opacity: 0.7;
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
    opacity: 0.6;
    border-top: 1px solid white;

    span {
      margin: 0px 20px;
      color: white;
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

function HoverFooter() {
  return (
    <>
      <WrapperUnderLine>
        <Box>
          <Container>
            <ItemTitle title="Title" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
          </Container>

          <Container>
            <ItemTitle title="Title" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
          </Container>

          <Container>
            <ItemTitle title="Title" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
          </Container>

          <Container>
            <ItemTitle title="Title" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
            <ItemContent content="Content" />
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

export default HoverFooter;
