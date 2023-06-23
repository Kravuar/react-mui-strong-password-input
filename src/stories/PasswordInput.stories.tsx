import React, { useState } from "react";
import { PasswordInput } from '../components/PasswordInput/PasswordInput';

export default { title: "PasswordInput", component: PasswordInput };

export function SimplePasswordInput() {
    const [password, setPassword] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    }
    return (
        <PasswordInput inputComponentProps={{
                value: password,
                onChange: changeHandler
            }} 
        />
    );
};