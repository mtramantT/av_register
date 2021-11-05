import React from "react";
import { someEmpty } from "../../util/Validations";
import { Input } from "../form";
import { Container, Row } from "../grid";
import * as Layout  from '../layout';
import { RegistrationInputAttr } from "../layout/types";

interface RegistrationFormProps {

}


const handleClear = () => {
    
}

// State Object
const inputValues = {
    firstName: {
        value: '',
        required: false
    },
    lastname: {
        value: '',
        required: false
    },
    npi: {
        value: '',
        required: false
    },
    line1: {
        value: '',
        required: false
    },
    line2: {
        value: '',
        required: false
    },
    city: {
        value: '',
        required: false
    },
    state: {
        value: '',
        required: false
    },
    zip: {
        value: '',
        required: false
    },
    phone: {
        value: '',
        required: false
    },
    email: {
        value: '',
        required: false
    },
}



export const RegistrationForm: React.FC<RegistrationFormProps> = (props: RegistrationFormProps) => {
    
    // Handle Methods required for layouts
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value.trim();
        switch(name) {
            case 'firstName':
                setFirstName({ value: value, onChange: firstName.onChange, required: firstName.required });
                break;
            case 'lastName':
                setFirstName({ value: value, onChange: lastName.onChange, required: lastName.required });
                break;
            case 'npi':
                setFirstName({ value: value, onChange: npi.onChange, required: npi.required });
                break;
            case 'line1':
                setFirstName({ value: value, onChange: line1.onChange, required: line1.required });
                break;
            case 'line2':
                setFirstName({ value: value, onChange: line2.onChange, required: line2.required });
                break;
            case 'city':
                setFirstName({ value: value, onChange: city.onChange, required: city.required });
                break;
            case 'state':
                setState({ value: value, onChange: city.onChange, required: city.required });
                break;
            case 'zip':
                setFirstName({ value: value, onChange: zip.onChange, required: zip.required });
                break;
            case 'phone':
                setFirstName({ value: value, onChange: phone.onChange, required: phone.required });
                break;
            case 'email':
                setFirstName({ value: value, onChange: email.onChange, required: email.required });
                break;
            default:
                break;
        }
        
    }

    const defaultRegistrationFieldProps = {
        value: '',
        onChange: handleInputChange,
        required: false
    }
    // State Management
    const [firstName, setFirstName] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [lastName, setLastname] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [npi, setNpi] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [line1, setLine1] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [line2, setLine2] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [city, setCity] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [state, setState] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [zip, setZip] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [phone, setPhone] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)
    const [email, setEmail] = React.useState<RegistrationInputAttr>(defaultRegistrationFieldProps)

    const handleSubmit = () => {
    }

    const submitButtonProps = {
        onClick: handleSubmit,
    }
    const clearButtonProps = {
        onClick: handleClear,
    }
    return (
        <Container>
            <Row>
                <Layout.UserInfoLayout 
                    firstNameField={firstName}
                    lastNameField={lastName}
                    npiField={npi}
                />
            </Row>
            <Row>
                <Layout.AddressLayout 
                    line1FieldAttr={line1}
                    line2FieldAttr={line2}
                    cityFieldAttr={city}
                    stateFieldAttr={{onChange: () => {}}}
                    zipfieldAttr={zip}               
                />
            </Row>
            <Row>
                <Layout.ContactLayout 
                    phoneFieldAttr={phone}
                    emailFieldAttr={email}
                />
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