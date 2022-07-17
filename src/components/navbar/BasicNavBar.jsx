import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  /* background-color: grey; */
  ${(props) => `background-color: ${props.bgColor ?? "grey"};`}
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  /* background-color: black; */
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  /* flex-direction: row-reverse; */
  align-items: center;
  padding-right: 20px;
  /* background-color: aqua; */
`;

function BasicNavBar({ bgColor, logo, buttons }) {
  return (
    <div>
      <Container bgColor={bgColor}>
        <LogoBox>{logo}</LogoBox>
        <ButtonBox>{buttons}</ButtonBox>
      </Container>
    </div>
  );
}

export default BasicNavBar;
