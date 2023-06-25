import React from "react";
import { StrongPasswordInput } from '../components/StrongPasswordInput/StrongPasswordInput';

export default { title: "StrongPasswordInput", component: StrongPasswordInput};

export function DefaultStrongPassword() {

    return (
        <StrongPasswordInput 
            strongPasswordContainerComponentProps={{
                spacing: 2
            }}
            securityLevels={[
                {
                    name: "invalid",
                    conditionsRequired: 0,
                    barComponentProps: {
                        barColor: "grey"
                    }
                },
                {
                    name: "tooWeak",
                    conditionsRequired: 1,
                    barComponentProps: {
                        barColor: "red"
                    }
                },
                {
                    name: "weak",
                    conditionsRequired: 2,
                    barComponentProps: {
                        barColor: "orange"
                    }
                },
                {
                    name: "good",
                    conditionsRequired: 3,
                    barComponentProps: {
                        barColor: "blue"
                    }
                },
                {
                    name: "strong",
                    conditionsRequired: 4,
                    barComponentProps: {
                        barColor: "green"
                    }
                }
            ]}
            conditions={[
                {
                    name: "length5",
                    validator: (password: string) => password.length >= 5,
                    conditionComponentProps: {
                        label: "Minimum length of 5 characters."
                    }
                },
                {
                    name: "1number",
                    validator: (password: string) => /.*[0-9].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 number."
                    }
                },
                {
                    name: "1uppercase",
                    validator: (password: string) => /.*[A-Z].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 uppercase letter."
                    }
                },
                {
                    name: "1lowercase",
                    validator: (password: string) => /.*[a-z].*/.test(password),
                    conditionComponentProps: {
                        label: "Contains at least 1 lowercase letter."
                    }
                }
            ]}
        
        />
    );
};