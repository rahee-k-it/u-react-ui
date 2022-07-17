import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  height: 50px;
  background-color: #000000;
  display: flex;
  /* align-items: center; */
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

const Button = styled.button`
  background-color: black;
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
    background-color: #3d3b3b;
    /* background-color: ${(props) => props.color}; */
    color: white;
    opacity: 0.7;
  }
`;

const FoldingBox = styled.div`
  position: absolute;
  right: 10px;
  z-index: 1;
  width: 300px;
  min-height: 400px;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px gray;
  padding: 10px;
  border: 1px solid #eee;
`;

function FoldingBasicNavBar({ logo, buttons, foldableContent }) {
  const [foldingBoxOpened, setFoldingBoxOpened] = useState(true);
  return (
    <div>
      <Container>
        <LogoBox>{logo}</LogoBox>
        <ButtonBox>
          {buttons}
          <Button
            onClick={() => {
              setFoldingBoxOpened(!foldingBoxOpened);
            }}
          >
            <FontAwesomeIcon icon={faBars} size="2x" color="white" />
          </Button>
        </ButtonBox>
      </Container>
      {foldingBoxOpened ? <FoldingBox>{foldableContent}</FoldingBox> : ""}
    </div>
  );
}

export default FoldingBasicNavBar;
