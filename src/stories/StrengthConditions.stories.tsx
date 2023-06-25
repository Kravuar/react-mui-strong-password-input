import React from "react";
import { StrengthConditions } from '../components/StrengthConditions/StrengthConditions';
import { BaseConditionProp } from "../components/StrengthConditions/StrengthConditions.types";

export default { title: "StrengthConditions", component: StrengthConditions };

export function DefaultStrengthConditions() {

    return (
        <StrengthConditions 
            conditions={[
                {
                    name: "first",
                    label: "first",
                    satisfied: false,
                },
                {
                    name: "second",
                    label: "second",
                    satisfied: false,
                },
                {
                    name: "third",
                    label: "third",
                    satisfied: true,
                },
                {
                    name: "fourth",
                    label: "fourth",
                    satisfied: false,
                },
            ]}
        />
    );
};

export function CustomStrengthBar() {
    interface TestProps extends BaseConditionProp {
        x: string,
        label: string | React.ReactElement
    }

    function TestCondition({ x, label, satisfied }: TestProps) {
        return (
            <div>{x} {label} {satisfied}</div>
        );
    }
    return (
        <StrengthConditions<TestProps> 
            ConditionComponent={TestCondition}
            conditions={[
                {
                    name: "first",
                    label: "first",
                    satisfied: false,
                    x: "WE'RE DONE"
                },
                {
                    name: "second",
                    label: "second",
                    satisfied: false,
                    x: "WE'RE DONE"
                },
                {
                    name: "third",
                    label: "third",
                    satisfied: true,
                    x: "WE'RE SO BACK"
                },
                {
                    name: "fourth",
                    label: "fourth",
                    satisfied: false,
                    x: "WE'RE DONE"
                },
            ]}
        />
    );
}