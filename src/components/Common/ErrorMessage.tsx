import React from 'react';
import "./ErrorMessage.scss";

interface ErrorMessageProps {
    children: JSX.Element|JSX.Element[]|string;
}
const ErrorMessage = (props: ErrorMessageProps) => {
    return (
        <div className="ErrorMessage">
            {props.children}
        </div>
    );
};

export default ErrorMessage;