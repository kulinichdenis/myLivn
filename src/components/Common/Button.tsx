import React from 'react';
import "./Button.scss";

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const {onClick, disabled = false} = props;
    return <button className="Button" disabled={disabled} onClick={onClick}>{props.children}</button>
};

export default Button;