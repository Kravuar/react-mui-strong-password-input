import React from "react";
import { ConditionBaseProps, ConditionDefaultComponentProps, ConditionsProps } from './Condition.types';

export default function ConditionDefault({ label, satisfied }: ConditionDefaultComponentProps) {

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
                style={{
                    width: '0.8em',
                    height: '0.8em',
                    borderRadius: '50%',
                    marginRight: '0.5em',
                    backgroundColor: satisfied ? 'green' : 'red',
                }}
            />
            <span>{label}</span>
        </div>
    );
}

export function Conditions<ConditionComponentProps extends ConditionBaseProps, ConditionContainerComponentProps>({
    conditions,
    ConditionComponent,
    ConditionContainerComponent,
    conditionContainerComponentProps,
    conditionProps
}: ConditionsProps<ConditionComponentProps, ConditionContainerComponentProps>) {

    const finalConditionContainerProps = {
        children: conditions.map(props => <ConditionComponent key={props.name} {...props} />),
        ...conditionProps,
        ...conditionContainerComponentProps
    } as React.PropsWithChildren<ConditionContainerComponentProps>;

    return <ConditionContainerComponent {...finalConditionContainerProps} />
}