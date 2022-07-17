import styled from "styled-components";
import HoverFooter from "../components/Footers/HoverFooter/HoverFooter";
import PartitionFooter from "../components/Footers/PartitionFooter/PartitionFooter";
import UnderLineFoooter from "../components/Footers/UnderLineFooter/UnderLineFooter";

const Li = styled.li`
  margin: 100px;
`;
function FooterPage() {
  return (
    <>
      <ol>
        <Li>
          <PartitionFooter bgColor="#f3ede8" titleColor="black" contentColor="" />
        </Li>

        <Li>
          <UnderLineFoooter bgColor="#f5f5f7" titleColor="black" contentColor="" />
        </Li>

        <Li>
          <HoverFooter
            bgColor="#1F1F1F"
            titleColor="white"
            contentColor=""
            contentHoverColor="white"
          />
        </Li>
      </ol>
    </>
  );
}

export default FooterPage;
