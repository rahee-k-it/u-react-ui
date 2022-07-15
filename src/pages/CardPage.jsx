import Card from "../components/Card";
import styled from "styled-components";

let CardsContainer = styled.div`
  background-color: #c2dff8;
  min-height: 100vh;
  padding-top: 10px;
`;

function CardPage() {
  return (
    <CardsContainer>
      <Card
        bgImg="assets/image/cake.png"
        title="Title"
        content="Content"
        shadowDirection="down-left"
      />
    </CardsContainer>
  );
}

export default CardPage;
