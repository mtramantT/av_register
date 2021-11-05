import React from 'react';
import { Input, Hr, StateSelector } from '../form';
import { Column, Row } from '../grid';
import { RegistrationFieldAttr } from './types';

interface AddressLayoutProps {
    line1FieldAttr: RegistrationFieldAttr;
    line2FieldAttr: RegistrationFieldAttr;
    cityFieldAttr: RegistrationFieldAttr;
    stateFieldAttr: RegistrationFieldAttr;
    zipfieldAttr: RegistrationFieldAttr;
}

const colSpan = 10

export const AddressLayout: React.FC<AddressLayoutProps> = (props: AddressLayoutProps) => {
    const { line1FieldAttr, line2FieldAttr, cityFieldAttr, stateFieldAttr, zipfieldAttr } = props;
    const handleSelectChange = () => {
        stateFieldAttr.onChange({} as React.ChangeEvent<HTMLInputElement>);
    }
    return (
        <>
            <h3>Address Info</h3>
            <Hr type="dashed" color="#ddd"/>
            <Row>
                <Column colSpan={colSpan}>
                    <Input 
                        id="line1" 
                        label="Line 1" 
                        onChange={line1FieldAttr.onChange}
                        value={line1FieldAttr.value}/>
                </Column>
            </Row>
            <Row>
                <Column colSpan={colSpan}>
                    <Input 
                        id="line2" 
                        label="Line 2" 
                        onChange={line2FieldAttr.onChange}
                        value={line2FieldAttr.value}/>
                </Column>
            </Row>
            <Row>
                <Column colSpan={3}>
                    <Input 
                        id="city"
                        label="City"
                        onChange={cityFieldAttr.onChange}
                        value={cityFieldAttr.value}/>
                </Column>
                <Column colSpan={1}>
                    <StateSelector
                        id="state"
                        label="State"
                        value={stateFieldAttr.value}
                        onSelect={handleSelectChange}
                        />
                </Column>
                <Column colSpan={3}>
                    <Input
                        id="zip"
                        label="Zip"
                        maxLength={5}
                        onChange={zipfieldAttr.onChange}
                        value={zipfieldAttr.value}/>
                </Column>
            </Row>
        </>
    )
}