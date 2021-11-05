import React from "react";
import { getConcatinatedMessage, isEmpty } from '../../util';
import { Bannar } from "../form";
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
        return { ...field, required: true }
    };

    const handleClear = () => {
        // Reset Status and Message
        setPageStatus('');
        setInitialMessage('');
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
        // Clear any previous submit attempts
        setInitialMessage('');
        setMessage('');
        setPageStatus('');

        // Empty validations
        const emptyList = [] as string[];
        if(isEmpty(firstName.value)) {
            emptyList.push(firstName.name);
            setFirstName(setRequired(firstName))
        };
        if(isEmpty(lastName.value)) {
            emptyList.push(lastName.name)
            setLastName(setRequired(lastName))};
        if(isEmpty(npi.value)) {
            emptyList.push(npi.name)
            setNpi(setRequired(npi))};
        if(isEmpty(line1.value)) {
            emptyList.push(line1.name)
            setLine1(setRequired(line1))};
        if(isEmpty(line2.value)) {
            emptyList.push(line2.name)
            setLine2(setRequired(line2))};
        if(isEmpty(city.value)) {
            emptyList.push(city.name)
            setCity(setRequired(city))};
        if(isEmpty(_state.value)) {
            emptyList.push(_state.name)
            set_State(setRequired(_state))};
        if(isEmpty(zip.value)) {
            emptyList.push(zip.name)
            setZip(setRequired(zip))};
        if(isEmpty(phone.value)) {
            emptyList.push(phone.name)
            setPhone(setRequired(phone))};
        if(isEmpty(email.value)) {
            emptyList.push(email.name)
            setEmail(setRequired(email))};
        
        if (emptyList.length > 0) {
            const initialMessage = "The following fields are required:"
            const newMessage = getConcatinatedMessage(emptyList);
            setInitialMessage(initialMessage);
            setMessage(newMessage);
            setPageStatus('red')
        }

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
    const [initialMessage, setInitialMessage] = React.useState<string>('');

    return (
        <Container style={ContainerStyles}>
            <Row style={{textAlign: 'center'}}><h2>Registration Form</h2></Row>
            <Bannar text={message} backgroundColor={pageStatus} initialText={initialMessage}/>
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