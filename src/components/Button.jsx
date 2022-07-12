import styled from "styled-components";

const ButtonStyle = styled.button`
background-color: ${props => props.bgColor};
border-radius: 5px;
padding: 10px;
border: none;
`;

const Button = ({ title, bgColor }) => {
    return <ButtonStyle bgColor={bgColor}>{title}</ButtonStyle>
};

export default Button;