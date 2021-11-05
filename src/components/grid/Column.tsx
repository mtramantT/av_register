import React from "react";
import styled from "styled-components";
import { mediaDevices, MediaDevices } from "./types";

interface ColumnProps {
    device?: MediaDevices;
}

const xsmColumn = styled.div.attrs({ className: 'col-xsm'})`
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;
const smColumn = styled.div.attrs({ className: 'col-sm'})``;
const mdColumn = styled.div.attrs({ className: 'col-md'})``;
const lgColumn = styled.div.attrs({ className: 'col-lg'})``;
const xlgColumn = styled.div.attrs({ className: 'col-xlg'})``;

export const Column = (props: ColumnProps) => {
    switch(props.device) {
        case 'xsm':
            return xsmColumn;
        case 'sm':
            return smColumn;
        case 'md':
            return mdColumn;
        case 'lg':
            return lgColumn;
        case 'xlg':
            return xlgColumn;
        case 'auto':
        default:
            return mdColumn;
    }    
}
