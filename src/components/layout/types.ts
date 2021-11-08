import React from "react"

export type ButtonAttr = {
    onClick: () => void;
}
export type RegistrationFieldAttr = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    name: string;
}
export type RegistrationSelectFieldAttr = {
    value: string;
    onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    name: string;
}

export type PageStatus = '' | 'red' | 'green'
