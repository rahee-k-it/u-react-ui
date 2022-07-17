import DisabledBtn from "../components/Buttons/DisableBtn";
import FillBtn from "../components/Buttons/FillBtn";
import HoverBtn from "../components/Buttons/HoverBtn";
import LinkBtn from "../components/Buttons/LinkBtn";
import LoadingBtn from "../components/Buttons/LoadingBtn";
import OutlineBtn from "../components/Buttons/OutlineBtn";

function Button() {
  return (
    <>
      <ol>
        <li>
          <LoadingBtn title="Loading" bgColor="tomato" />
        </li>

        <li>
          <FillBtn title="Fill" bgColor="tomato" />
        </li>

        <li>
          <OutlineBtn title="OutLine" color="tomato" />
        </li>

        <li>
          <DisabledBtn title="Disabled" color="tomato" />
        </li>
        <li>
          <HoverBtn title="Hover" color="tomato" />
        </li>
        <li>
          <LinkBtn title="Link" color="tomato" />
        </li>
      </ol>
    </>
  );
}

export default Button;
