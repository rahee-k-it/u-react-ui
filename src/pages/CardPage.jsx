import ImageCard from "../components/Cards/ImageCard";
import BasicCard from "../components/Cards/BasicCard";
import styled from "styled-components";

const CardsContainer = styled.div`
  background-color: #f5f3d8;
  min-height: 100vh;
  min-width: 400vh;
  padding-top: 10px;
  /* display: flex; */
  flex-direction: column;
`;

const BasicCardsContainer = styled.div`
  display: flex;
`;

const ImageCardsContainer = styled.div`
  display: flex;
`;

function CardPage() {
  return (
    <CardsContainer>
      <ol>
        <li>
          <BasicCardsContainer>
            <BasicCard subtitle="subtitle" title="title" content="short content" />
            <BasicCard
              subtitle="subtitle"
              title="title"
              content="long content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <BasicCard subtitle="subtitle" title="title" content="with border" border />
            <BasicCard
              subtitle="subtitle"
              title="title"
              content="with shadow"
              shadowDirection="down-right"
            />
            <BasicCard
              subtitle="subtitle"
              title="title"
              content="title and subtitle with color"
              bgColor="pink"
            />
          </BasicCardsContainer>
        </li>
        <li>
          <ImageCardsContainer>
            {/* Image Card 그림자 위치별 구현 */}
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: up"
              shadowDirection="up"
            />
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: up-right"
              shadowDirection="up-right"
            />
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: right"
              shadowDirection="right"
            />
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: down-right"
              shadowDirection="down-right"
            />
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: down"
              shadowDirection="down"
            />
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: down-left"
              shadowDirection="down-left"
            />
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: left"
              shadowDirection="left"
            />
            <ImageCard
              bgImg="assets/image/cake.png"
              title="ImageCard"
              content="Shadow: up-left"
              shadowDirection="up-left"
            />
          </ImageCardsContainer>
        </li>
      </ol>
    </CardsContainer>
  );
}

export default CardPage;
