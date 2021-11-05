import React from 'react';
import { Input } from '../form';
import { Column, Container, Row } from '../grid';
import { RegistrationInputAttr, RegistrationSelectAttr } from './types';

interface AddressLayoutProps {
    line1FieldAttr: RegistrationInputAttr;
    line2FieldAttr: RegistrationInputAttr;
    cityFieldAttr: RegistrationInputAttr;
    stateFieldAttr: RegistrationSelectAttr;
    zipfieldAttr: RegistrationInputAttr;
}

export const AddressLayout: React.FC<AddressLayoutProps> = (props: AddressLayoutProps) => {
    const { line1FieldAttr, line2FieldAttr, cityFieldAttr, stateFieldAttr, zipfieldAttr } = props;
    return (
        <Container>
            <h3>Address Info</h3>
            <hr />
            <Row>
                <Column><Input id="line1" label="Line 1" onChange={line1FieldAttr.onChange}/></Column>
            </Row>
            <Row>
                <Column><Input id="line2" label="Line 2" onChange={line2FieldAttr.onChange}/></Column>
            </Row>
            <Row>
                <Column></Column>
                <Column></Column>
                <Column></Column>
            </Row>
        </Container>
    )
}