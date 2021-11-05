import React from "react";
import { Row, Column } from '../grid'
import { Input } from '../form';
import { RegistrationFieldAttr } from "./types";

interface UserInfoLayoutProps {
    firstNameField: RegistrationFieldAttr;
    lastNameField: RegistrationFieldAttr;
    npiField: RegistrationFieldAttr;
}

export const UserInfoLayout: React.FC<UserInfoLayoutProps> = (props: UserInfoLayoutProps): JSX.Element => {
    const { firstNameField, lastNameField, npiField } = props;
    return (
        <>
            <h3>User Info</h3>
            <hr />
            <Row>
                <Column colSpan={3}><Input id="firstName" label="First Name" onChange={firstNameField.onChange} /></Column>
                <Column colSpan={3}><Input id="lastName" label="Last Name" onChange={lastNameField.onChange}/></Column>
            </Row>
            <Row>
                <Column colSpan={3}><Input id="npi-number" label="NPI Number" onChange={npiField.onChange}/></Column>
            </Row>
        </>
    )
}