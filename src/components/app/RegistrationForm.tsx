import React from "react";
import { isEmpty, isValidEmail, isValidNpi, isValidPhoneNumber } from "../../util/Validations";
import { Container, Row } from "../grid";
import * as Layout  from '../layout';
import { RegistrationFieldAttr } from "../layout/types";

interface RegistrationFormProps {

}

const ContainerStyles: React.CSSProperties = {
    border: '1px solid black',
    marginLeft: '20%',
    marginRight: '20%',
    padding: '40px',
}

export const RegistrationForm: React.FC<RegistrationFormProps> = (props: RegistrationFormProps) => {
    
    // Handle Methods required for layouts
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value.trim();
        switch(name) {
            case 'firstName':
                setFirstName({ ...firstName, value: value});
                break;
            case 'lastName':
                setLastName({ ...lastName, value: value});
                break;
            case 'npi-number':
                setNpi({ ...npi, value: value});
                break;
            case 'line1':
                setLine1({ ...line1, value: value});
                break;
            case 'line2':
                setLine2({ ...line2, value: value});
                break;
            case 'city':
                setCity({ ...city, value: value });
                break;
            case 'state':
                set_State({ ..._state, value: value });
                break;
            case 'zip':
                setZip({ ...zip, value: value });
                break;
            case 'phone':
                setPhone({ ...phone, value: value });
                break;
            case 'email':
                setEmail({ ...email, value: value });
                break;
            default:
                break;
        }
    }

    const setRequired = (field: RegistrationFieldAttr): RegistrationFieldAttr => {
        return { ...field, required: false }
    };

    const handleClear = () => {
        // Reset Status and Message
        setPageStatus('');
        setMessage('');
        // Reset all fields
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
        // Empty Validation
        if(isEmpty(firstName.value)) setFirstName(setRequired(firstName));
        if(isEmpty(lastName.value)) setLastName(setRequired(lastName));
        if(isEmpty(npi.value)) setNpi(setRequired(npi));
        if(isEmpty(line1.value)) setLine1(setRequired(line1));
        if(isEmpty(line2.value)) setLine2(setRequired(line2));
        if(isEmpty(city.value)) setCity(setRequired(city));
        if(isEmpty(_state.value)) set_State(setRequired(_state));
        if(isEmpty(zip.value)) setZip(setRequired(zip));
        if(isEmpty(phone.value)) setPhone(setRequired(phone));
        if(isEmpty(email.value)) setEmail(setRequired(email));

        const fields = [firstName, lastName, npi, line1, line2, city, _state, zip, phone, email]
        if(fields.some((field) => field.required)) {
            setMessage('The following fields are required');
            setPageStatus('red');
            fields.forEach((field) => {
                setMessage(message.concat(field.required ? field.name : ''));
            })
        } else if (!isValidPhoneNumber(phone.value)) {
            setMessage("Please enter a valid phone number!");
            setPageStatus('red');
        
        // NPI Validation
        }else if (!isValidNpi(npi.value)) {
            setMessage("Please enter a valid NPI number!");
            setPageStatus("red");
        // Phone Validation
        }else if (!isValidPhoneNumber(phone.value)) {
            setMessage("Please enter a valid phone number!");
            setPageStatus('red');
        // Email Validation
        } else if (!isValidEmail(email.value)) {
            setMessage("Please enter a valid email address!");
            setPageStatus('red');
        }

        // Validation passed!
        setMessage("SUCCESS!!");
        setPageStatus('green');
    }

    // Default Objects and Properties
    const defaultRegistrationFieldProps = {
        value: '',
        onChange: handleInputChange,
        required: false,
        name: '',
    }
    const submitButtonProps = {
        onClick: handleSubmit,
    }
    const clearButtonProps = {
        onClick: handleClear,
    }

    
    // State Management
    const [firstName, setFirstName] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "First Name", })
    const [lastName, setLastName] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "Last Name", })
    const [npi, setNpi] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "NPI", })
    const [line1, setLine1] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "Line 1", })
    const [line2, setLine2] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "Line 2", })
    const [city, setCity] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "City", })
    const [_state, set_State] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "State", })
    const [zip, setZip] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "Zip", })
    const [phone, setPhone] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "Phone", })
    const [email, setEmail] = React.useState<RegistrationFieldAttr>({...defaultRegistrationFieldProps, name: "Email", })
    const [message, setMessage] = React.useState<string>('');
    const [pageStatus, setPageStatus] = React.useState<string>('');

    return (
        <Container style={ContainerStyles}>
            <Row style={{textAlign: 'center'}}><h2>Registration Form</h2></Row>
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