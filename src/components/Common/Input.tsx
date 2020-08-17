import React from "react";
import "./Input.scss";
import ErrorMessage from "./ErrorMessage";

interface InputProps {
    name: string;
    onBlur: (name: string) => void;
    onChange: (name: string, value: any) => void;
    type: string;
    value: string;
    touched: boolean;
    error: string,
};


const Input = (props: InputProps) => {
    const { value, error, touched, name, type, onChange, onBlur } = props;
    const updateInput = (e: any) => onChange(name, e.target.value);
    const onTouched = () => onBlur(name);
    return(
        <div>
            <input data-testid="input" className="Input" value={value} name={name} type={type} onChange={updateInput} onBlur={onTouched} />
            {error && touched && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    )
};

export default Input;