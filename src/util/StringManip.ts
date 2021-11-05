export const getConcatinatedMessage = (vals: string[]): string => {
    let message = '';
    vals.forEach((val,index) => {
        const seperator = index === 0 ? ' ' : ', '
        message = message.concat(seperator);
        message = message.concat(val);
    })
    return message;
}
