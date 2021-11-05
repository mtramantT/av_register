import React from "react"

export type ButtonAttr = {
    onClick: () => void;
}
export type RegistrationInputAttr = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {};
    required?: boolean;
}
export type RegistrationSelectAttr = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {};
    required?: boolean;
}