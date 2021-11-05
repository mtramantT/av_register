import styled from "styled-components";

interface HorizontalLineProps {
    type: 'solid' | 'dashed';
    color?: string;
}
export const Hr = styled.hr<HorizontalLineProps>`
    border-top: ${({ type, color }) => `1px ${type} ${color || 'black'}`};
`;