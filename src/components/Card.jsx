import styled from "styled-components";
// import cake from "../components/c

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

let Container = styled.div`
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: whitesmoke;
  border-radius: 15px;
  ${({ shadowDirection }) =>
    shadowDirection ? "box-shadow: " + boxShadowDirections[shadowDirection] + " 5px gray" : ""}
`;

let Flex = styled.div`
  display: flex;
  justify-content: center;
`;

let Image = styled.img`
  margin-top: 30px;
  width: 250px;
  height: 200px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  border-radius: 5px;
`;

let Title = styled.h1`
  text-align: center;
  color: black;
  font-size: 30px;
`;

let Content = styled.div`
  margin-left: 20px;
  color: black;
`;

function Card({ title, content, bgImg, shadowDirection }) {
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

export default Card;
