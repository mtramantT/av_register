import React from "react";
import { Button } from "../form";
import { Column, Row } from "../grid";
import { ButtonAttr } from "./types";

interface ButtonLayoutProps {
    submitButtonProps: ButtonAttr;
    clearButtonProps: ButtonAttr;
}

const ColStyle: React.CSSProperties = {
    display: "inline-block",
    padding: '5px',
}

export const ButtonLayout: React.FC<ButtonLayoutProps> = (props: ButtonLayoutProps) => {
    return (
        <>
            <div style={ColStyle}>
                <Button
                    id="submit-button"
                    onClick={props.submitButtonProps.onClick}>
                    Submit
                </Button>
            </div>
            <div style={ColStyle}>
                <Button
                    id="clear-button"
                    onClick={props.clearButtonProps.onClick}
                    buttonColor="#ec7575">
                        Clear
                    </Button>
            </div>
        </>
    )
}
