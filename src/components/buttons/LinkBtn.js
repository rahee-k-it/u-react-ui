import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const LinkContainer = styled.a`
    cursor: pointer;
    color:${props => props.color};
    i{
        font-size: 13px;
        margin-left: 2px;
    }
    :hover{
        color:${props => props.color};
        text-decoration: underline;
    }
`;

function LinkBtn({ title, color }) {
    return (
        <>
            <LinkContainer color={color}>
                <span>{title}</span>
                <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                </i>
            </LinkContainer>
        </>
    )
};

export default LinkBtn;
