import styled from "styled-components";
import DisabledBtn from "../components/Buttons/DisableBtn";
import FillBtn from "../components/Buttons/FillBtn";
import HoverBtn from "../components/Buttons/HoverBtn";
import LinkBtn from "../components/Buttons/LinkBtn";
import LoadingBtn from "../components/Buttons/LoadingBtn";
import OutlineBtn from "../components/Buttons/OutlineBtn";

const LiBox = styled.li`
  margin-bottom: 10px;
`;

function Button() {
  return (
    <>
      <ol>
        <LiBox>
          <LoadingBtn title="Loading" bgColor="tomato" />
        </LiBox>

        <LiBox>
          <FillBtn title="Fill" bgColor="tomato" />
        </LiBox>

        <LiBox>
          <OutlineBtn title="OutLine" color="tomato" />
        </LiBox>

        <LiBox>
          <DisabledBtn title="Disabled" color="tomato" />
        </LiBox>

        <LiBox>
          <HoverBtn title="Hover" color="tomato" />
        </LiBox>

        <LiBox>
          <LinkBtn title="Link" color="tomato" />
        </LiBox>
      </ol>
    </>
  );
}

export default Button;
