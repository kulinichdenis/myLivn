import React from 'react';
import { useMainContext } from "../../../hooks/useMainContext";

const Loader = () => {
    const context = useMainContext();
    const loading = context?.loading;

    if(!loading) {
        return null;
    }
    return (
        <div>
            Loading
        </div>
    );
};

export default Loader;