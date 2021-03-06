import { RegistrationFieldAttr } from "../components/layout/types";

export const isValidPhoneNumber = (val: string) => {
    const reg = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
    return reg.test(val);
}
export const isValidEmail = (val: string) => {
    const reg = new RegExp('^(.+)@(\\S+)$')
    console.log(reg.test(val))
    return reg.test(val);
}

export const isValidNpi = (val: string) => {
    const reg = new RegExp('^[0-9]{10}$');
    return reg.test(val);
}

export const isEmpty = (val?: string) => {
    return !val || val === '';
}


export const allValid = (fields: RegistrationFieldAttr[]) => {
    const requiredFields = fields.filter((field) => field.required)
    return requiredFields.length === 0;
}