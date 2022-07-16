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

let Container = styled.div`
  margin: 50px;
  width: 300px;
  height: 300px;
  background-color: whitesmoke;
  border-radius: 15px;
  ${({ border }) => (border ? "border: 1px solid gray" : "")}
  ${({ shadowDirection }) =>
    shadowDirection ? "box-shadow: " + boxShadowDirections[shadowDirection] + " 5px gray" : ""}
`;

let SubTitle = styled.h2`
  color: #5a5a5a;
  font-size: 15px;
  padding-top: 30px;
  ${(props) => `background-color: ${props.bgColor ?? "#c2c1c1"};`}
  padding-left: 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

let Title = styled.h1`
  color: black;
  font-size: 30px;
  ${(props) => `background-color: ${props.bgColor ?? "#c2c1c1"};`}
  padding-left: 10px;
  padding-bottom: 10px;
`;

let Content = styled.div`
  padding-top: 10px;
  color: black;
  font-size: 25px;
  height: 170px;
  overflow: auto;
  padding-left: 10px;
  border-top: thin solid;
`;

function BasicCard({ border, shadowDirection, bgColor, subtitle, title, content }) {
  return (
    <Container border={border} shadowDirection={shadowDirection}>
      <SubTitle bgColor={bgColor}>{subtitle}</SubTitle>
      <Title bgColor={bgColor}>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}

export default BasicCard;
