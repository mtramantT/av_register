import React from 'react';
import { Input } from '../form';
import { Column, Container, Row } from '../grid';

interface ContactLayoutProps {

}

export const ContactLayout: React.FC<ContactLayoutProps> = (props: ContactLayoutProps) => {
    return (
        <Container>
            <Row>
                <Column><Input id="phone" label="Phone Number"/></Column>
                <Column><Input id="emial" label="Email Address"/></Column>
            </Row>
        </Container>
    );
}
