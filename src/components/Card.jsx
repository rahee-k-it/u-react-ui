import styled from "styled-components";
// import cake from "../components/cake.png";

let Container = styled.div`
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: whitesmoke;
  border-radius: 15px;
  box-shadow: 10px 10px 5px gray;
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

function Card({ title, content, bgImg }) {
  return (
    <Container>
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
