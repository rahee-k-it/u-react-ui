import { Link } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  width: 100%;
`;
function FooterPage() {
  return (
    <>
      <ol>
        <Li>
          <Link to={"partition"}>Partition Footer</Link>
        </Li>

        <Li>
          <Link to={"underline"}>UnderLine Footer</Link>
        </Li>
      </ol>
    </>
  );
}

export default FooterPage;
