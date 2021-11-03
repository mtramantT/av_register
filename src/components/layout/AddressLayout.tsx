import React from 'react';
import { Input } from '../form';
import { Column, Container, Row } from '../grid';

interface AddressLayoutProps {

}

export const AddressLayout: React.FC<AddressLayoutProps> = (props: AddressLayoutProps) => {
    return (
        <Container>
            <h3>Address Info</h3>
            <hr />
            <Row>
                <Column><Input id="line1" label="Line 1"/></Column>
            </Row>
            <Row>
                <Column><Input id="line2" label="Line 2"/></Column>
            </Row>
            <Row>
                <Column></Column>
                <Column></Column>
                <Column></Column>
            </Row>
        </Container>
    )
}