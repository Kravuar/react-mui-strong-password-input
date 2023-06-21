import React from "react";
import { StrengthConditions } from '../components/StrengthConditions/StrengthConditions';
import { ConditionProp } from "../components/StrengthConditions/StrengthConditions.types";

export default { title: "StrengthConditions", component: StrengthConditions };

export function DefaultStrengthConditions() {

    return (
        <StrengthConditions 
            conditions={[
                {
                    label: "first",
                    satisfied: false,
                },
                {
                    label: "second",
                    satisfied: false,
                },
                {
                    label: "third",
                    satisfied: true,
                },
                {
                    label: "fourth",
                    satisfied: false,
                },
            ]}
        />
    );
};

export function CustomStrengthBar() {
    interface TestProps extends ConditionProp {
        x: string
    }

    function TestCondition({ x, label, satisfied }: TestProps) {
        return (
            <div>{x} {label} {satisfied}</div>
        );
    }
    return (
        <StrengthConditions<TestProps> 
            ConditionComponent={TestCondition}
            containerComponentProps={{
                direction: "row",
                spacing: 5
            }}
            conditions={[
                {
                    label: "first",
                    satisfied: false,
                    x: "WE'RE DONE"
                },
                {
                    label: "second",
                    satisfied: false,
                    x: "WE'RE DONE"
                },
                {
                    label: "third",
                    satisfied: true,
                    x: "WE'RE SO BACK"
                },
                {
                    label: "fourth",
                    satisfied: false,
                    x: "WE'RE DONE"
                },
            ]}
        />
    );
}