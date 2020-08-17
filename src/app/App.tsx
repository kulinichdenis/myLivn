import React from 'react';
import { Pagination, Form, Loader, RssList, Error } from "../components/App";
import { MainProvider } from "../providers/MainProvider";
import ErrorBoundary from "../components/Error/ErrorBoundary";
import './App.scss';

function App() {
    return (
        <div className="App">
            <ErrorBoundary>
                <header className="header">RSS</header>
                <div className="body">
                    <MainProvider>
                        <Form/>
                        <Loader/>
                        <Error />
                        <Pagination range={5}>
                            <RssList />
                        </Pagination>
                    </MainProvider>
                </div>
            </ErrorBoundary>
        </div>
    );
}

export default App;
