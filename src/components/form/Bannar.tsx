import React from "react";
import styled from "styled-components";
import { Row } from '../grid'

interface BannarProps {
    text: string;
    initialText: string;
    backgroundColor: string;
    color: string;
}

interface BannarContainerProps {
    display: string;
    backgroundColor: string;
}

interface BannarContentProps {
    color: string;
}

const BannarContainer = styled.div<BannarContainerProps>`
    display: ${({display}) => display};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    width: 80%;
    margin-left: 10%;
    margin-right: 15%;
    text-align: center;
`;
const BannarContent = styled.div<BannarContentProps>`
    display: block;
    font-size: 20px;
    color: ${({ color }) => color};
`;
const BannarTitle = styled(BannarContent)``
const BannarText = styled(BannarContent)``;

export const Bannar: React.FC<Partial<BannarProps>> = (props: Partial<BannarProps>): JSX.Element => {
    // State Management
    const [display, setDisplay] = React.useState<string>('none');
    const [backgroundColor, setBackgroundColor] = React.useState<string>('');
    const [color, setColor] = React.useState<string>('');

    // Hooks
    React.useEffect(() => {
        setDisplay(props.text ? 'block' : 'none')
    },[props.text])

    React.useEffect(() => {
        setBackgroundColor(props.backgroundColor || '');
        setColor(props.color || '');
    }, [props.backgroundColor, props.color])

    return (
        <BannarContainer display={display} backgroundColor={backgroundColor} color={color}>
            {props.initialText && <Row><BannarTitle color={color}>{props.initialText}</BannarTitle></Row> }
            <Row>
                <BannarText color={color}>
                    {props.text}
                </BannarText>
            </Row>
        </BannarContainer>
    )
}