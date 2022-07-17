import { Link } from "react-router-dom";
import styled from "styled-components";
import HoverFooter from "../components/Footers/HoverFooter/HoverFooter";
import PartitionFooter from "../components/Footers/PartitionFooter/PartitionFooter";
import UnderLineFoooter from "../components/Footers/UnderLineFooter/UnderLineFooter";

const Li = styled.li`
  width: 100%;
  margin: 100px;
`;
function FooterPage() {
  return (
    <>
      <ol>
        <Li>
          <Link to={"partition"}>
            <PartitionFooter />
          </Link>
        </Li>

        <Li>
          <Link to={"underline"}>
            <UnderLineFoooter />
          </Link>
        </Li>

        <Li>
          <Link to={"hover"}>
            <HoverFooter />
          </Link>
        </Li>
      </ol>
    </>
  );
}

export default FooterPage;
