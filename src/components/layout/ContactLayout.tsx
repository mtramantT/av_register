import React from 'react';
import { Input } from '../form';
import { Column, Row } from '../grid';
import { RegistrationFieldAttr } from './types';

interface ContactLayoutProps {
    phoneFieldAttr: RegistrationFieldAttr;
    emailFieldAttr: RegistrationFieldAttr;
}

const ColSpan = 10;

export const ContactLayout: React.FC<ContactLayoutProps> = (props: ContactLayoutProps) => {
    const {phoneFieldAttr, emailFieldAttr} = props;
    return (
        <>
            <h3>Contact Info</h3>
            <hr />
            <Row>
                <Column colSpan={ColSpan}>
                    <Input 
                        id="phone" 
                        label="Phone Number"
                        onChange={phoneFieldAttr.onChange}
                        value={phoneFieldAttr.value}/>
                </Column>
                <Column colSpan={ColSpan}>
                    <Input 
                        id="email" 
                        label="Email Address"
                        onChange={emailFieldAttr.onChange}
                        value={emailFieldAttr.value}/>
                </Column>
            </Row>
        </>
    );
}
