import React from "react";
import { Container, Row, Column } from '../grid'
import { Input } from '../form';

interface UserInfoLayoutProps {

}

export const UserInfoLayout: React.FC<UserInfoLayoutProps> = (props: UserInfoLayoutProps): JSX.Element => {
    return (
        <Container className="user-info-contaienr">
            <h3>User Info</h3>
            <hr />
            <Row>
                <Column colSpan={3}><Input id="firstName" label="First Name" /></Column>
                <Column colSpan={3}><Input id="lastName" label="Last Name" /></Column>
            </Row>
            <Row>
                <Column colSpan={3}><Input id="npi-number" label="NPI Number" /></Column>
            </Row>
        </Container>
    )
}