import styled from "styled-components";

const boxShadowDirections = {
  up: "0 -5px",
  "up-right": "5px -5px",
  right: "5px 0",
  "down-right": "5px 5px",
  down: "0 5px",
  "down-left": "-5px 5px",
  left: "-5px 0",
  "up-left": "-5px -5px",
};

const Container = styled.div`
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: whitesmoke;
  border-radius: 15px;
  ${({ shadowDirection }) =>
    shadowDirection ? "box-shadow: " + boxShadowDirections[shadowDirection] + " 5px gray" : ""}
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  margin-top: 30px;
  width: 250px;
  height: 200px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  border-radius: 5px;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  font-size: 30px;
`;

const Content = styled.div`
  margin-left: 20px;
  color: black;
  font-size: 25px;
`;

function ImageCard({ title, content, bgImg, shadowDirection }) {
  return (
    <Container shadowDirection={shadowDirection}>
      <Flex>
        <Image bgImg={bgImg}></Image>
      </Flex>
      <div>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </div>
    </Container>
  );
}

export default ImageCard;
