import React from "react";
import { allValid, isEmpty, isValidEmail, isValidPhoneNumber } from "../../util/Validations";
import { Container, Row } from "../grid";
import * as Layout  from '../layout';
import { RegistrationFieldAttr } from "../layout/types";

interface RegistrationFormProps {

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
                setLastName({ value: value, onChange: lastName.onChange, required: lastName.required });
                break;
            case 'npi-number':
                setNpi({ value: value, onChange: npi.onChange, required: npi.required });
                break;
            case 'line1':
                setLine1({ value: value, onChange: line1.onChange, required: line1.required });
                break;
            case 'line2':
                setLine2({ value: value, onChange: line2.onChange, required: line2.required });
                break;
            case 'city':
                setCity({ value: value, onChange: city.onChange, required: city.required });
                break;
            case 'state':
                set_State({ value: value, onChange: city.onChange, required: city.required });
                break;
            case 'zip':
                setZip({ value: value, onChange: zip.onChange, required: zip.required });
                break;
            case 'phone':
                setPhone({ value: value, onChange: phone.onChange, required: phone.required });
                break;
            case 'email':
                setEmail({ value: value, onChange: email.onChange, required: email.required });
                break;
            default:
                break;
        }
    }

    const setRequired = (): RegistrationFieldAttr => {
        return {value: '', onChange: handleInputChange, required: true}
    };

    const handleClear = () => {
        setFirstName(defaultRegistrationFieldProps);
        setLastName(defaultRegistrationFieldProps);
        setNpi(defaultRegistrationFieldProps);
        setLine1(defaultRegistrationFieldProps);
        setLine2(defaultRegistrationFieldProps);
        setCity(defaultRegistrationFieldProps);
        set_State(defaultRegistrationFieldProps);
        setZip(defaultRegistrationFieldProps);
        setPhone(defaultRegistrationFieldProps);
        setEmail(defaultRegistrationFieldProps);
    }
    const handleSubmit = () => {
        const errorMessage = [] as string[];
        
        // Empty Validation
        if(isEmpty(firstName.value)) {
            errorMessage.push('First Name');
            setFirstName(setRequired());
        }
        if(isEmpty(lastName.value)) {
            errorMessage.push('Last Name');
            setLastName(setRequired());
        }
        if(isEmpty(npi.value)) {
            errorMessage.push('NPI');
            setNpi(setRequired());
        }
        if(isEmpty(line1.value)) {
            errorMessage.push('Address line 1');
            setLine1(setRequired());
        }
        if(isEmpty(line2.value)) {
            errorMessage.push('Address line 2');
            setLine2(setRequired());
        }
        if(isEmpty(city.value)) {
            errorMessage.push('City');
            setCity(setRequired());
        }
        if(isEmpty(_state.value)) {
            errorMessage.push('State');
            set_State(setRequired());
        }
        if(isEmpty(zip.value)) {
            errorMessage.push('Zip');
            setZip(setRequired());
        }
        if(isEmpty(phone.value)) {
            errorMessage.push('Phone');
            setPhone(setRequired());
        }
        if(isEmpty(email.value)) {
            errorMessage.push('Email');
            setEmail(setRequired());
        }

        // Phone Validation
        if(!isValidPhoneNumber(phone.value)) {
            setPhone(setRequired());
            errorMessage.push('Please enter a valid phone number')
        }
        // Email Validation
        if(!isValidEmail(email.value)) {
            setEmail(setRequired());
            errorMessage.push('Please enter a valid email')
        }

        // Set error boundry here (a bannar)
        let message = '';
        const fields = [firstName, lastName, npi, line1, line2, city, _state, zip, phone, email]
        if(allValid(fields)) {
            message = 'The form was submitted!'; 
        }else {
            message = 'Please resolve all issues:'
            errorMessage.forEach((msg) => message.concat(' ' + msg))
        }
    }

    // Default Objects and Properties
    const defaultRegistrationFieldProps = {
        value: '',
        onChange: handleInputChange,
        required: false
    }
    const submitButtonProps = {
        onClick: handleSubmit,
    }
    const clearButtonProps = {
        onClick: handleClear,
    }

    
    // State Management
    const [firstName, setFirstName] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [lastName, setLastName] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [npi, setNpi] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [line1, setLine1] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [line2, setLine2] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [city, setCity] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [_state, set_State] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [zip, setZip] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [phone, setPhone] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)
    const [email, setEmail] = React.useState<RegistrationFieldAttr>(defaultRegistrationFieldProps)

    return (
        <Container>
            <Row className="row-container" id="user-info">
                <Layout.UserInfoLayout 
                    firstNameField={firstName}
                    lastNameField={lastName}
                    npiField={npi}
                />
            </Row>
            <Row className="row-container" id="user-address">
                <Layout.AddressLayout 
                    line1FieldAttr={line1}
                    line2FieldAttr={line2}
                    cityFieldAttr={city}
                    stateFieldAttr={_state}
                    zipfieldAttr={zip}               
                />
            </Row>
            <Row className="row-container" id="user-contact-info">
                <Layout.ContactLayout 
                    phoneFieldAttr={phone}
                    emailFieldAttr={email}
                />
            </Row>
            <Row className="row-container" id="reg-button-group">
                <Layout.ButtonLayout
                    submitButtonProps={submitButtonProps}
                    clearButtonProps={clearButtonProps}
                />
            </Row>
        </Container>
    );
}