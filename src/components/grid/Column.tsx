import React from "react";
import styled from "styled-components";
import { MediaDevices, ColSpan } from "./types";

interface ColumnProps {
    device?: MediaDevices;
    colSpan?: number | 'auto';
}

interface BaseColumnProps {
    colSpan: ColSpan;
}

// Styled Components
const BaseColumn = styled.div`
    float: left;
    padding: 15px;
    width: 100%;
`;
const xsmColumn = styled(BaseColumn).attrs({
    className: 'col-xsm'
})<BaseColumnProps>`
    @media only screen and (min-width: 600px) {
        width: ${({ colSpan }) => `${getWidth(colSpan)}%`}
    }
`;
const smColumn = styled(BaseColumn).attrs({
    className: 'col-sm'
})<BaseColumnProps>`
    @media only screen and (max-width: 600px) {
        width: ${({ colSpan }) => `${getWidth(colSpan)}%`}
    }
`;
const mdColumn = styled(BaseColumn).attrs({
    className: 'col-md'
})<BaseColumnProps>`
    @media only screen and (max-width: 600px) {
        width: ${({ colSpan }) => `${getWidth(colSpan)}%`}
    }
`;
const lgColumn = styled(BaseColumn).attrs({
    className: 'col-lg'
})<BaseColumnProps>`
    @media only screen and (max-width: 600px) {
        width: ${({ colSpan }) => `${getWidth(colSpan)}%`}
    }
`;
const xlgColumn = styled(BaseColumn).attrs({
    className: 'col-xlg'
})<BaseColumnProps>`
    @media only screen and (max-width: 600px) {
        width: ${({ colSpan }) => `${getWidth(colSpan)}%`}
    }
`;

const getWidth = (colSpan: ColSpan): number => {
    if (colSpan === 'auto') return 100; // auto = 100&
    if (colSpan % 3 === 0) return (colSpan / 3) * 25; // Modulus 3 rounder
    return 8.333 * colSpan;
}

export const Column = (props: ColumnProps) => {
    switch (props.device) {
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
