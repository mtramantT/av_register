import React from "react";
import { Container, Row, Column } from '../grid'
import { Input } from '../form';
import { RegistrationInputAttr } from "./types";

interface UserInfoLayoutProps {
    firstNameField: RegistrationInputAttr;
    lastNameField: RegistrationInputAttr;
    npiField: RegistrationInputAttr;
}

export const UserInfoLayout: React.FC<UserInfoLayoutProps> = (props: UserInfoLayoutProps): JSX.Element => {
    const { firstNameField, lastNameField, npiField } = props;
    return (
        <Container className="user-info-contaienr">
            <h3>User Info</h3>
            <hr />
            <Row>
                <Column colSpan={3}><Input id="firstName" label="First Name" onChange={firstNameField.onChange} /></Column>
                <Column colSpan={3}><Input id="lastName" label="Last Name" onChange={lastNameField.onChange}/></Column>
            </Row>
            <Row>
                <Column colSpan={3}><Input id="npi-number" label="NPI Number" onChange={npiField.onChange}/></Column>
            </Row>
        </Container>
    )
}