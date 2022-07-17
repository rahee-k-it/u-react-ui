import BasicNavBar from "../components/navbar/BasicNavBar";
import FoldingNavBar from "../components/navbar/FoldingNavBar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

const Logo = styled.div`
  color: white;
  font-size: 30px;
  margin-left: 10px;
`;

const NavBarBox = styled.div`
  margin-bottom: 50px;
`;

const Button = styled.button`
  background-color: ${({ bgColor }) => `${bgColor ?? "gray"};`};
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.1s linear;
  &:hover {
    color: white;
    opacity: 0.7;
  }
`;
function NavBarPage() {
  return (
    <>
      <NavBarBox>
        <BasicNavBar
          logo={
            <>
              <FontAwesomeIcon icon={faCookieBite} size="2x" color="white" />
              <Logo>Basic NavBar</Logo>
            </>
          }
          buttons={
            <>
              <Button>뉴스</Button>
              <Button>쇼핑</Button>
              <Button>증권</Button>
              <Button>국어사전</Button>
              <Button>영어사전</Button>
              <Button>한자사전</Button>
              <Button>지도</Button>
              <Button>블로그</Button>
            </>
          }
        />
      </NavBarBox>
      <NavBarBox>
        <FoldingNavBar
          logo={
            <>
              <FontAwesomeIcon icon={faCookieBite} size="2x" color="white" />
              <Logo>Folding NavBar</Logo>
            </>
          }
          buttons={
            <>
              <Button bgColor="black">뉴스</Button>
              <Button bgColor="black">쇼핑</Button>
              <Button bgColor="black">증권</Button>
              <Button bgColor="black">국어사전</Button>
              <Button bgColor="black">영어사전</Button>
              <Button bgColor="black">한자사전</Button>
              <Button bgColor="black">지도</Button>
              <Button bgColor="black">블로그</Button>
            </>
          }
          foldableContent={<p>foldingContent</p>}
        />
      </NavBarBox>
      <NavBarBox>
        <BasicNavBar
          bgColor="green"
          logo={
            <>
              <FontAwesomeIcon icon={faCookieBite} size="2x" color="white" />
              <Logo>Basic NavBar with Green Background Color</Logo>
            </>
          }
          buttons={
            <>
              <Button bgColor="green">뉴스</Button>
              <Button bgColor="green">쇼핑</Button>
              <Button bgColor="green">증권</Button>
              <Button bgColor="green">국어사전</Button>
              <Button bgColor="green">영어사전</Button>
              <Button bgColor="green">한자사전</Button>
              <Button bgColor="green">지도</Button>
              <Button bgColor="green">블로그</Button>
            </>
          }
        />
      </NavBarBox>
    </>
  );
}

export default NavBarPage;
