import React from "react"

export type ButtonAttr = {
    onClick: () => void;
}
export type RegistrationInputAttr = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}
export type RegistrationSelectAttr = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}