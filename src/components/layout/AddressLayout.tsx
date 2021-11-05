import React from 'react';
import { Input } from '../form';
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
    return (
        <>
            <h3>Address Info</h3>
            <hr />
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
                <Column></Column>
                <Column></Column>
                <Column></Column>
            </Row>
        </>
    )
}