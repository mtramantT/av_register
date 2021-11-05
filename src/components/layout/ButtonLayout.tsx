import React from "react";
import { Button } from "../form";
import { Column, Row } from "../grid";
import { ButtonAttr } from "./types";

interface ButtonLayoutProps {
    submitButtonProps: ButtonAttr;
    clearButtonProps: ButtonAttr;
}

const ColStyle: React.CSSProperties = {
    padding: '5px',
}

export const ButtonLayout: React.FC<ButtonLayoutProps> = (props: ButtonLayoutProps) => {
    return (
        <>
            <Row>
                <Column colSpan={1} style={ColStyle}>
                    <Button
                        id="submit-button"
                        onClick={props.submitButtonProps.onClick}>
                        Submit
                    </Button>
                </Column>
                <Column colSpan={1} style={ColStyle}>
                    <Button
                        id="clear-button"
                        onClick={props.clearButtonProps.onClick}
                        buttonColor="#ec7575">
                            Clear
                        </Button>
                </Column>
            </Row>
        </>
    )
}
