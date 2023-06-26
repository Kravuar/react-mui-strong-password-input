import React, { useState } from "react";
import { PasswordInputDefaultComponentProps } from "./PasswordInput.types";

export default function PasswordInputDefault({ value, onChange, placeholder }: PasswordInputDefaultComponentProps) {
    const [hidden, setHidden] = useState(true);

    const hiddenHandler = () => setHidden(!hidden);

    return (
        <div>
            <input
                placeholder={placeholder}
                type={hidden ? 'password' : 'text'}
                value={value}
                onChange={onChange}
                style={{
                    padding: '8px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            <button onClick={hiddenHandler}>
                {hidden ? 'Show' : 'Hide'}
            </button>
        </div>
    );
}