import styled from 'styled-components';

let Container = styled.div`
  margin: 50px;
  width: 300px;
  height: 400px;
  background-color: grey;
  border-radius: 15px;
`;

let Flex = styled.div`
  display: flex;
  justify-content: center;
`;

let Image = styled.div`
  margin-top: 30px;
  width: 250px;
  height: 200px;
  background-color: aquamarine;
`;

let Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 30px;
`;

let Content = styled.div`
  margin-left: 20px;
  color: whitesmoke;
`;

function Card({ title, content }) {
  return (
    <>
      <Container>
        <Flex>
          <Image></Image>
        </Flex>
        <div>
          <Title>{title}</Title>
          <Content>
            {content}
            {/* <div>1.이미지파일 넣기</div> <div>2.디자인변경</div> */}
          </Content>
        </div>
      </Container>
    </>
  );
}

export default Card;
