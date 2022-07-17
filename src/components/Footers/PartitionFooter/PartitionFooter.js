import styled from "styled-components";
import ItemContent from "./ItemContent";
import ItemTitle from "./ItemTitle";

export const Wrapper = styled.div`
  box-sizing: border-box;
  min-width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3ede8;
  padding: 0px 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;

  &:nth-child(2) {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

function PartitionFooter() {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
}

export default PartitionFooter;
