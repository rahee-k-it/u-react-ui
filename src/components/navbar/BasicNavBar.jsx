import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  ${(props) => `background-color: ${props.bgColor ?? "grey"};`}
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
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
