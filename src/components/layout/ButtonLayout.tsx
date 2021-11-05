import React from "react";
import { Button } from "../form";
import { Column, Container, Row } from "../grid";
import { ButtonAttr } from "./types";

interface ButtonLayoutProps {
    submitButtonProps: ButtonAttr;
    clearButtonProps: ButtonAttr;
}

export const ButtonLayout: React.FC<ButtonLayoutProps> = (props: ButtonLayoutProps) => {
    return (
        <>
            <Row>
                <Column colSpan={1}>
                    <Button 
                        onClick={props.submitButtonProps.onClick}>
                        Submit
                    </Button>
                </Column>
                <Column colSpan={1}>
                    <Button 
                        onClick={props.submitButtonProps.onClick}
                        buttonColor="#ec7575">
                            Submit
                        </Button>
                </Column>
            </Row>
        </>
    )
}
