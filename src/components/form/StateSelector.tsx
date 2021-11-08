import React from "react"
import styled from "styled-components"
import { states, StatesKey } from './types'

interface StateSelectorProps {
    id: string;
    value: string;
    identifier?: StatesKey;
    label?: string;
    onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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

    return (
        <SelectWrapper>
            {props.label && <SelectLabel htmlFor={props.id}>{props.label}:</SelectLabel>}
            <SelectBox
                id={props.id}
                name={props.id}
                onChange={props.onSelect}
                defaultValue="AL"
                value={props.value}
            >
                {states.map((state, index) => {
                    return <Option 
                                key={`${state}-${index}`} 
                                value={state[identifier]} 
                                label={state[identifier]} />
                })}
            </SelectBox>
        </SelectWrapper>
    )
}
