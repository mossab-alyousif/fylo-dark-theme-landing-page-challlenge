/* eslint-disable react/react-in-jsx-scope */
import styled, { css } from 'styled-components';

type Props = {
    children: string;
    primary: boolean;
};
type ButtonProps = {
    primary: boolean;
};
const StyledButton = styled.button<ButtonProps>`
    background-color: #333;
    color: #eee;
    font-size: 2.5rem;
    border: none;
    margin-left: 50px;
    ${({ primary }) =>
        primary &&
        css`
            background-color: #eee;
            color: #333;
        `};
    &:hover {
        background-color: palevioletred;
        color: #eee;
    }
`;

const Button = ({ children, primary }: Props) => {
    console.log(children);

    return <StyledButton primary={primary}>{children}</StyledButton>;
};
export default Button;
