import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    buttonColor?: string;
    textColor?: string;
}

interface ButtonStyleProps {
    buttonColor: string;
    textColor: string;
}

const ButtonEle = styled.button<Partial<ButtonStyleProps>>`
    ${({ buttonColor }) => 
        buttonColor 
            ? css` background-color: ${buttonColor};`
            : css`background-color: #5babf7;`
    }
    ${({ textColor }) => 
        textColor 
            ?css`color: ${textColor};`
            :css`color: white`
    }
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    return <ButtonEle {...props} onClick={props.onClick}>{props.children}</ButtonEle>
} 