import React from "react";
import InputWrapper from "./InputWrapper";

export default function Header(props) {
    return (
        <header>
            <h3>Things To Do</h3>
            <InputWrapper {...props} />
        </header>
    );
}
