import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
    readonly children: JSX.Element | JSX.Element[];
}

interface ErrorBoundaryState {
    hasError: any;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something wrong with application</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;