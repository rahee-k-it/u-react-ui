import styled from "styled-components";
import DisabledBtn from "../components/Buttons/DisableBtn";
import FillBtn from "../components/Buttons/FillBtn";
import HoverBtn from "../components/Buttons/HoverBtn";
import LinkBtn from "../components/Buttons/LinkBtn";
import LoadingBtn from "../components/Buttons/LoadingBtn";
import OutlineBtn from "../components/Buttons/OutlineBtn";

const Li = styled.li`
  margin: 10px 0px;
`;
function ButtonPage() {
  return (
    <>
      <ol>
        <Li>
          <LoadingBtn title="Loading" bgColor="tomato" />
        </Li>

        <Li>
          <FillBtn title="Fill" bgColor="tomato" />
        </Li>

        <Li>
          <OutlineBtn title="OutLine" color="tomato" />
        </Li>

        <Li>
          <DisabledBtn title="Disabled" color="tomato" />
        </Li>
        <Li>
          <HoverBtn title="Hover" color="tomato" />
        </Li>
        <Li>
          <LinkBtn title="Link" color="tomato" />
        </Li>
      </ol>
    </>
  );
}

export default ButtonPage;
