import React from "react";
import { Container, Row } from "../grid";
import * as Layout  from '../layout';

interface RegistrationFormProps {

}

const handleSubmit = () => {

}
const handleClear = () => {
    
}

export const RegistrationForm: React.FC<RegistrationFormProps> = (props: RegistrationFormProps) => {
    const submitButtonProps = {
        onClick: handleSubmit,
    }
    const clearButtonProps = {
        onClick: handleClear,
    }
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
            <Row>
                <Layout.ButtonLayout
                    submitButtonProps={submitButtonProps}
                    clearButtonProps={clearButtonProps}
                />
            </Row>
        </Container>
    );
}