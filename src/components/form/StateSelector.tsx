import React from "react"
import styled from "styled-components"
import { states, StatesKey } from './types'

type States = typeof states;
interface StateSelectorProps {
    id: string;
    identifier?: StatesKey;
    label?: string;
}


const SelectWrapper = styled.div``;
const SelectLabel = styled.label``;
const SelectBox = styled.select``;
const Option = styled.option``;

const mapOptions = (states: States, identifier: StatesKey): JSX.Element[] => {
    return states.map((state) => <Option>{state[identifier]}</Option>)
}

export const StateSelector: React.FC<StateSelectorProps> = (props: StateSelectorProps): JSX.Element => {
    const [identifier, setIdentifier] = React.useState<StatesKey>(props.identifier || 'abr')

    const stateList = states;

    React.useEffect(() => {
        const identifier = props.identifier || 'abr';
        setIdentifier(identifier);
    }, [props.identifier])

    return (
        <SelectWrapper>
            {props.label && <SelectLabel htmlFor={props.id}>{props.label}:</SelectLabel>}
            <SelectBox
                id={props.id}
                name={props.id}
            >
                {mapOptions(stateList, identifier)}
            </SelectBox>
        </SelectWrapper>
    )
}
