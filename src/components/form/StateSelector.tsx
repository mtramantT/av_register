import React from "react"
import styled from "styled-components"
import { states, StatesKey } from './types'

interface StateSelectorProps {
    id: string;
    value: string;
    identifier?: StatesKey;
    label?: string;
    onSelect: () => void;
}

const SelectWrapper = styled.div``;
const SelectLabel = styled.label``;
const SelectBox = styled.select``;
const Option = styled.option``;

export const StateSelector: React.FC<StateSelectorProps> = (props: StateSelectorProps): JSX.Element => {
    const [identifier, setIdentifier] = React.useState<StatesKey>(props.identifier || 'abr')

    React.useEffect(() => {
        const identifier = props.identifier || 'abr';
        setIdentifier(identifier);
    }, [props.identifier])

    const mapOptions = React.useMemo(() => {
        const statesList = states;
        const ide = identifier;
        return statesList.map((state) => {
            return props.value === state[ide]
                ? <Option selected={true}>{state[ide]}</Option>
                :<Option>{state[ide]}</Option>
        })
    }, [props.value, identifier])

    return (
        <SelectWrapper>
            {props.label && <SelectLabel htmlFor={props.id}>{props.label}:</SelectLabel>}
            <SelectBox
                id={props.id}
                name={props.id}
                onSelect={props.onSelect}
            >
                {mapOptions}
            </SelectBox>
        </SelectWrapper>
    )
}
