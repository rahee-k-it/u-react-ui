import DisabledBtn from "../components/buttons/DisableBtn";
import FillBtn from "../components/buttons/FillBtn";
import HoverBtn from "../components/buttons/HoverBtn";
import LinkBtn from "../components/buttons/LinkBtn";
import LoadingBtn from "../components/buttons/LoadingBtn";
import OutlineBtn from "../components/buttons/OutlineBtn";



function Buttons() {
    return (
        <>
            <ol>
                <li>
                    <LoadingBtn title='Loading' bgColor='tomato' />
                </li>

                <li>
                    <OutlineBtn title='OutLine' color='tomato' />
                </li>

                <li>
                    <FillBtn title='Fill' bgColor='tomato' />
                </li>
                <li>
                    <DisabledBtn title='Disabled' color='tomato' />
                </li>
                <li>
                    <HoverBtn title='Hover' color='tomato' />
                </li>
                <li>
                    <LinkBtn title='Link' color='tomato' />
                </li>
            </ol>

        </>
    )
};

export default Buttons;
