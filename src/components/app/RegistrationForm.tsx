import React from "react";
import { Container } from "../grid";

interface RegistrationFormProps {

}

export const RegistrationForm: React.FC<RegistrationFormProps> = (props: RegistrationFormProps) => {
    return (
        <Container>
            UserInfo
            Address Info
            Contact Info
        </Container>
    );
}