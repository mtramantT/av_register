import React from "react"

export type ButtonAttr = {
    onClick: () => void;
}
export type RegistrationFieldAttr = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}