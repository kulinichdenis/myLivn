import React from 'react';
import { useMainContext } from "../../../hooks/useMainContext";
import ErrorMessage from "../../Common/ErrorMessage";

const Error = () => {
    const context = useMainContext();
    const error = context?.error || "";

    if (!error) {
        return null;
    }
    return (
        <>
            <ErrorMessage>
                {error}
            </ErrorMessage>
        </>
    );
};

export default Error;