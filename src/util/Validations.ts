export const isValidPhoneNumber = (val: string) => {
    const reg = new RegExp('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im');
    return reg.test(val);
}
export const isValidEmail = (val: string) => {
    const reg = new RegExp('^(.+)@(\S+)$')
    return reg.test(val);
}

export const someEmpty = (vals: string[]) => {
    for (let i=0; i<vals.length; i++) {
        if (!vals || vals[i] === '') return true;
    }
    return false;
}