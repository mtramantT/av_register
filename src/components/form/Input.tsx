import React from "react";
import styled from "styled-components";

interface InputProps extends React.HTMLAttributes<HTMLInputElement>, Partial<PartialInputProps> {
    value: string;
    style?: React.CSSProperties
}
interface PartialInputProps {
    label: string;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}
interface InputWrapperProps {
    populated: boolean;
}
interface LabelProps {
    focus: boolean;
}


const InputEle = styled.input`
    border-width: 0 0 1px 0;
    font-size: 16px;
    width: 100%;

    &:focus {
        outline: 1px solid blue;
    }
`;
const Label = styled.label<LabelProps>`
    color: ${({focus}) => focus ? 'blue' : 'black'};
    margin-bottom: 3px;
`;
const InputWrapper = styled.div<InputWrapperProps>`
    display: inline-block;
    position: relative;
    margin: 15px;
    width: 95%;

    ${Label} {
        position: absolute;
        transition: 230;
        bottom: ${({ populated }) => populated ? '20px' : '0px'};
        font-size: ${({ populated }) => populated ? '12px' : '14px'};
    }
`;

export const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
    const [focus, setFocus] = React.useState<boolean>(false);
    const [populated, setPopulated] = React.useState<boolean>(false)

    React.useEffect(() => {
        setPopulated(focus || props.value.length > 0)
    }, [populated, focus])

    const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        props.onFocus && props.onFocus(event);
    },[props.onFocus]);

    const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        props.onBlur && props.onBlur(event);
    }, [props.onBlur]);

    return (
        <InputWrapper populated={populated}>
            {props.label && <Label focus={focus} htmlFor={props.id}>{props.label}:</Label>}
            <InputEle
                id={props.id}
                name={props.id}
                onChange={props.onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                value={props.value}
            />
        </InputWrapper>
    )
}
