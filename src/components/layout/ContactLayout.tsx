import React from 'react';
import { Input } from '../form';
import { Column, Row } from '../grid';
import { RegistrationFieldAttr } from './types';

interface ContactLayoutProps {
    phoneFieldAttr: RegistrationFieldAttr;
    emailFieldAttr: RegistrationFieldAttr;
}

export const ContactLayout: React.FC<ContactLayoutProps> = (props: ContactLayoutProps) => {
    return (
        <>
            <h3>Contact Info</h3>
            <hr />
            <Row>
                <Column><Input id="phone" label="Phone Number"/></Column>
                <Column><Input id="emial" label="Email Address"/></Column>
            </Row>
        </>
    );
}
