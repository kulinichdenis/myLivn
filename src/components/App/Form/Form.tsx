import React, { useState } from 'react';
import Button from "../../Common/Button";
import Input from "../../Common/Input";
import { useMainContext } from "../../../hooks/useMainContext";
import "./Form.scss";

interface FormValuesState {
    [key: string]: string;
}

interface FormErrorsState {
    [key: string]: string;
}

interface FormTouchesState {
    [key: string]: boolean;
}

const Form = () => {
    const context = useMainContext();
    const getRss = context?.getRss;

    const [values, setValue] = useState<FormValuesState>({rss: "https://hnrss.org/newest"});
    const [errors, setError] = useState<FormErrorsState>({rss: ""});
    const [touches, setTouch] = useState<FormTouchesState>({rss: false});

    const sendForm = () => {
        if(values.rss) {
            getRss && getRss(values.rss);
        } else {
            setError({...errors, rss: "Field is empty"});
        }
    };

    const onChange = (name: string, value: string) => {
        if(errors[name]) {
            setError({...errors, [name]: ""});
        }
        setValue({...values, [name]: value});
    };

    const onBlur = (name: string) => {
        setTouch({...touches, [name]: true});
    };

    return (
        <div className="form">
            <div className="form-group">
                <Input value={values.rss} error={errors.rss} touched={touches.rss} type="text" name="rss" onChange={onChange} onBlur={onBlur} />
                <Button onClick={sendForm}>Find</Button>
            </div>
        </div>
    );
};

export default Form;