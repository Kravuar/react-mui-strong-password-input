import React, { useState } from "react";
import { InputDefaultComponentProps } from "./Input.types";

export default function InputDefault({ value, onChange, placeholder }: InputDefaultComponentProps) {
    const [hidden, setHidden] = useState(true);

    const hiddenHandler = () => setHidden(!hidden);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p
                onClick={hiddenHandler}
                style={{
                    cursor: 'pointer',
                    marginRight: '0.5em',
                    fontSize: '1em',
                    minWidth: '3em',
                    color: '#666',
                    textDecoration: 'underline',
                }}
            >
                {hidden ? 'Show' : 'Hide'}
            </p>
            <input
                placeholder={placeholder}
                type={hidden ? 'password' : 'text'}
                value={value}
                onChange={onChange}
                style={{
                    padding: '0.5em',
                    fontSize: '1em',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            />
        </div>
    );
}
