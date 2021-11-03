import React from "react";
import styled from "styled-components";

interface InputProps  extends React.HTMLAttributes<HTMLInputElement>, Partial<PartialInputProps> {
}
interface PartialInputProps {
    label: string;
    value: string;
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

    ${Label} {
        position: absolute;
        transition: 230;
        bottom: ${({ populated }) => populated ? '20px' : '0px'};
        font-size: ${({ populated }) => populated ? '12px' : '14px'};
    }
`;

export const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
    const [focus, setFocus] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('');
    const [populated, setPopulated] = React.useState<boolean>(false)

    React.useEffect(() => {
        setPopulated(focus || value.length > 0)
    }, [populated, focus])

    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
            props.onChange && props.onChange(event);
    }, [value])
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
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            />
        </InputWrapper>
    )
}