import React from "react";
import { Container, Row, Column } from '../grid'
import { Input } from '../form';

interface UserInfoLayoutProps {

}

export const UserInfoLayout: React.FC<UserInfoLayoutProps> = (props: UserInfoLayoutProps): JSX.Element => {
    return (
        <Container className="user-info-contaienr">
            <Row>
                <Column><Input id="firstName" label="First Name" /></Column>
                <Column><Input id="lastName" label="Last Name" /></Column>
            </Row>
            <Row>
                <Column><Input id="npi-number" label="NPI Number" /></Column>
            </Row>
        </Container>
    )
}