import React from 'react';
import { Input } from '../form';
import { Column, Container, Row } from '../grid';
import { RegistrationInputAttr } from './types';

interface ContactLayoutProps {
    phoneFieldAttr: RegistrationInputAttr;
    emailFieldAttr: RegistrationInputAttr;
}

export const ContactLayout: React.FC<ContactLayoutProps> = (props: ContactLayoutProps) => {
    return (
        <Container>
            <h3>Contact Info</h3>
            <hr />
            <Row>
                <Column><Input id="phone" label="Phone Number"/></Column>
                <Column><Input id="emial" label="Email Address"/></Column>
            </Row>
        </Container>
    );
}
