import React from "react";
import { Container, Row } from "../grid";
import * as Layout  from '../layout';

interface RegistrationFormProps {

}

export const RegistrationForm: React.FC<RegistrationFormProps> = (props: RegistrationFormProps) => {
    return (
        <Container>
            <Row>
                <Layout.UserInfoLayout />
            </Row>
            <Row>
                <Layout.AddressLayout />
            </Row>
            <Row>
                <Layout.ContactLayout />
            </Row>
        </Container>
    );
}