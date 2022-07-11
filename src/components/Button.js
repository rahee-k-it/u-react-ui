import styled from "styled-components";

const ButtonRed = styled.button`
background-color: tomato;
`;

function Button({ text }) {
    return (
        <>
            <ButtonRed>{text}</ButtonRed>
        </>
    )
};

export default Button;