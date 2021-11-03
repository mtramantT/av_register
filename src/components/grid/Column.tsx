import React from "react";
import styled from "styled-components";
import { mediaDevices, MediaDevices } from "./types";

interface ColumnProps {
    mediaLen?: MediaDevices;
    colSpan?: number | 'auto';
}

const getWidth = (colSpan: number | 'auto'): number => {
    if(colSpan === 'auto') return 100; // auto
    if(colSpan < 1 || colSpan > 12) return 100; // Range
    if(colSpan % 3 === 0) return (colSpan / 3) * 25; // Modulus 3 rounder
    return 8.333 * colSpan;
}

export const Column = styled.div.attrs((props: ColumnProps) => ({
    className: `col-${props.mediaLen ? (props.mediaLen === 'auto' ? 'md' : props.mediaLen ) : 'md'}`,
    width: props.colSpan ? `${getWidth(props.colSpan)}%` : `${getWidth('auto')}%`,
    media: props.mediaLen ? mediaDevices[props.mediaLen] : mediaDevices['auto'],
}))`
    @media ${props => props.media} {
       width: ${props => props.width};
    }
    float: left;
    padding: 15px;
    width: 100%;
`;
